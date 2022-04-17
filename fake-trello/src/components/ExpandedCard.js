import { Card, Text, Textarea, Group, Button, Badge } from "@mantine/core";
import { useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";

export default function ExpandedCard() {
  const navigate = useNavigate();
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
    <Card
      style={{
        width: "80%",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      shadow="lg"
      p="lg"
    >
      <Group position="apart" style={{ marginBottom: 15 }}>
        <Text weight={500} style={{ lineHeight: 1.5, marginLeft: 10 }}>
          {card.title}
        </Text>
        <Badge color="orange" variant="light">
          {card.label}
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

      <Button
        variant="light"
        color="blue"
        fullWidth
        style={{ marginTop: 14 }}
        onClick={() => {
          updateCard(input);
          navigate(`/`);
        }}
      >
        save
      </Button>
    </Card>
  );
}
