import { Card, Text, Textarea, Group, Button, Badge } from "@mantine/core";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";

export default function ExpandedCard() {
  const [card, setCard] = useState({});
  const [input, setInput] = useState();
  const { id } = useParams();
  const { update, getByID } = useIndexedDB("cards");
  function updateCard(input) {
    update({ id: card.id, title: card.title, content: input }).then((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    getByID(id).then((card) => {
      setCard(card);
      setInput(card.content);
    });
  }, []);
  return (
    <Card style={{ width: 400, marginBottom: 10 }} shadow="sm" p="lg">
      <Group position="apart" style={{ marginBottom: 5 }}>
        <Badge color="pink" variant="light"></Badge>
      </Group>

      <Text size="sm" style={{ lineHeight: 1.5 }}>
        {card.title}
      </Text>
      <Textarea
        value={input}
        placeholder={input}
        onChange={(e) => setInput(e.target.value)}
        autosize
        minRows={2}
      />

      <Button
        variant="light"
        color="blue"
        fullWidth
        style={{ marginTop: 14 }}
        onClick={() => updateCard(input)}
      >
        save
      </Button>
    </Card>
  );
}
