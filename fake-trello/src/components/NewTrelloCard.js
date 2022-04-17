import {
  Card,
  Text,
  Group,
  Button,
  Badge,
  TextInput,
  Textarea,
  MultiSelect,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";

export default function NewTrelloCard(props) {
  const [cardTitle, setCardTitle] = useState("");
  const [cardContent, setCardContent] = useState("");
  const [labels, setLabels] = useState([]);
  const [cardLabels, setCardLabels] = useState([]);
  const { getAll } = useIndexedDB("labels");

  function AddCard(cardTitle, cardContent, cardLabels) {
    const { add } = useIndexedDB("cards");

    add({
      title: cardTitle,
      content: cardContent,
      labels: cardLabels,
      timestamp: Date.now(),
      column: props.column,
    }).then((error) => {
      console.log(error);
    });
  }

  function AddLabel(label) {
    const { add } = useIndexedDB("labels");

    add({
      label: label,
    }).then((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getAll().then((labelsFromDB) => {
      const temp = labelsFromDB.map((label) => label.label);
      setLabels(temp);
    });
  }, []);

  return (
    <Card
      style={{
        width: 300,
        margin: 10,
        border: "1px solid rgba(0, 0, 0, .3)",
        borderRadius: 10,
      }}
      shadow="sm"
      p="lg"
    >
      <Group position="apart" style={{ marginBottom: 5 }}>
        <TextInput
          label="Title"
          placeholder="title"
          weight={500}
          onChange={(event) => setCardTitle(event.currentTarget.value)}
        ></TextInput>
        <MultiSelect
          label="Labels"
          data={labels || ["Bug", "Feature", "Enhancement"]}
          placeholder="Select labels"
          searchable
          creatable
          onChange={setCardLabels}
          getCreateLabel={(query) => `+ Create ${query}`}
          onCreate={(query) => {
            // setCardLabels((cardLabels) => [...cardLabels, query]);
            AddLabel(query);
          }}
        />
      </Group>
      <Textarea
        label="Content"
        placeholder="content"
        size="sm"
        style={{ lineHeight: 1.5 }}
        autosize
        minRows={2}
        onChange={(event) => setCardContent(event.currentTarget.value)}
      ></Textarea>
      <Button
        variant="light"
        color="blue"
        fullWidth
        style={{ marginTop: 14 }}
        onClick={() => {
          console.log("saved");
          AddCard(cardTitle, cardContent, cardLabels);
          window.location.reload();
        }}
      >
        save
      </Button>
    </Card>
  );
}
