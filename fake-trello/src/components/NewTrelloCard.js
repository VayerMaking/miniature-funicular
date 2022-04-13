import {
  Card,
  Text,
  Group,
  Button,
  Badge,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";

export default function NewTrelloCard(props) {
  const [cardTitle, setCardTitle] = useState("");
  const [cardContent, setCardContent] = useState("");

  const { add } = useIndexedDB("cards");

  function addCard(cardTitle, cardContent) {
    add({ title: cardTitle, content: cardContent }).then((error) => {
      console.log(error);
    });
  }

  return (
    <Card style={{ width: 200, marginBottom: 10 }} shadow="sm" p="lg">
      <Group position="apart" style={{ marginBottom: 5 }}>
        <TextInput
          placeholder="title"
          weight={500}
          onChange={(event) => setCardTitle(event.currentTarget.value)}
        ></TextInput>
        <Badge color="pink" variant="light"></Badge>
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
          addCard(cardTitle, cardContent);
        }}
      >
        save
      </Button>
    </Card>
  );
}
