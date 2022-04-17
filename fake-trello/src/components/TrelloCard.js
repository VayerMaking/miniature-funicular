import { Card, Text, Group, Button, Badge } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

export default function TrelloCard(props) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/card/${props.card.id}`);
      }}
      style={{
        width: 300,
        margin: 10,
        border: "1px solid rgba(0, 0, 0, .3)",
        borderRadius: 10,
      }}
      shadow="lg"
      p="lg"
      withBorder={true}
    >
      <Group position="apart" style={{ marginBottom: 5 }}>
        <Text weight={500}>{props.card.title}</Text>
        <Badge color="orange" variant="light">
          {props.card.labels}
        </Badge>
      </Group>
      <Group position="right">
        <Badge color="grape" variant="light">
          {props.card.author}
        </Badge>
      </Group>

      <Text size="sm" style={{ lineHeight: 1.5 }}>
        {props.card.content}
      </Text>
    </Card>
  );
}
