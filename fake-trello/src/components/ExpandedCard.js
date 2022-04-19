import {
  Card,
  Text,
  Textarea,
  Group,
  Button,
  Badge,
  SegmentedControl,
} from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";

export default function ExpandedCard(props) {
  const navigate = useNavigate();

  const [card, setCard] = useState(props.card);
  const [input, setInput] = useState("");
  const [column, setColumn] = useState(props.card.column);
  const { getByID } = useIndexedDB("cards");
  const [columnTitles, setColumnTitles] = useState(["default"]);
  let { id } = useParams();

  function UpdateCard(input) {
    const { update } = useIndexedDB("cards");

    update({
      id: card.id,
      title: card.title,
      content: input,
      column: column,
      author: card.author,
      timestamp: card.timestamp,
      labels: card.labels,
      is_archived: false,
    }).then((error) => {
      console.log(error);
    });
  }

  function ArchiveCard() {
    const { update } = useIndexedDB("cards");

    update({
      id: card.id,
      title: card.title,
      content: card.content,
      column: column,
      author: card.author,
      timestamp: card.timestamp,
      labels: card.labels,
      is_archived: true,
    }).then((error) => {
      console.log(error);
    });
  }

  function DeleteCard() {
    const { deleteRecord } = useIndexedDB("cards");
    deleteRecord(card.id).then((error) => {
      console.log(error);
    });
  }

  function GetColumns() {
    const { getAll } = useIndexedDB("columns");
    getAll().then((columnsFromDB) => {
      const temp = columnsFromDB
        .filter((column) => column.board === id)
        .map((column) => column.title);
      console.log("temp", temp);

      setColumnTitles(temp);
    });
  }
  useEffect(() => {
    getByID(props.id).then((i) => {
      setCard({ ...card, ...i });
      setInput(card.content);
      GetColumns();
      setColumn(card.column);
    });
  }, []);
  return (
    <Card
      style={{
        border: "1px solid rgba(0, 0, 0, .3)",
        borderRadius: 10,
      }}
      shadow="lg"
      p="lg"
    >
      <Group position="apart" style={{ marginBottom: 15 }}>
        <Text weight={500} style={{ lineHeight: 1.5, marginLeft: 10 }}>
          {card.title}
        </Text>
        <Badge color="orange" variant="light">
          {card.labels}
        </Badge>
      </Group>
      <Group position="right" style={{ marginBottom: 15 }}>
        <Text weight={200} size={"xs"}>
          author:
        </Text>
        <Badge color="grape" variant="light">
          {card.author}
        </Badge>
      </Group>

      <Textarea
        value={input}
        placeholder={input}
        onChange={(e) => setInput(e.target.value)}
        autosize
        minRows={2}
      />

      <SegmentedControl
        style={{ margin: 10 }}
        fullWidth
        size="xs"
        value={column}
        onChange={setColumn}
        data={columnTitles}
        defaultValue={card.column}
      />

      <Group position="apart" spacing="xs">
        <Button
          variant="light"
          color="blue"
          style={{ marginTop: 14 }}
          onClick={() => {
            UpdateCard(input);
          }}
        >
          save
        </Button>
        <Button
          variant="light"
          color="orange"
          style={{ marginTop: 14 }}
          onClick={() => {
            ArchiveCard();
          }}
        >
          archive
        </Button>
        <Button
          variant="light"
          color="red"
          style={{ marginTop: 14 }}
          onClick={() => {
            DeleteCard();
          }}
        >
          delete
        </Button>
      </Group>
    </Card>
  );
}
