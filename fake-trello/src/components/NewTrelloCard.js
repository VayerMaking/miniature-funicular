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
  const [labels, setLabels] = useState(["Bug", "Enchansment", "Idea"]);
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

  //   useEffect(() => {
  //     getAll().then((labelsFromDB) => {
  //       console.log("lables", labels);
  //       setLabels(labelsFromDB);
  //       console.log("lables after", labels);
  //     });
  //   }, []);

  return (
    <Card
      style={{
        width: 200,
        margin: 10,
        border: "1px solid rgba(0, 0, 0, .3)",
        borderRadius: 10,
      }}
      shadow="sm"
      p="lg"
    >
      <Group position="apart" style={{ marginBottom: 5 }}>
        <TextInput
          placeholder="title"
          weight={500}
          onChange={(event) => setCardTitle(event.currentTarget.value)}
        ></TextInput>
        <MultiSelect
          label="Labels"
          data={labels}
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
