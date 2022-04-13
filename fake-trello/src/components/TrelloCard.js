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
      style={{ width: 200, marginBottom: 10 }}
      shadow="sm"
      p="lg"
    >
      <Group position="apart" style={{ marginBottom: 5 }}>
        <Text weight={500}>{props.card.title}</Text>
        <Badge color="pink" variant="light"></Badge>
      </Group>

      <Text size="sm" style={{ lineHeight: 1.5 }}>
        {props.card.content}
      </Text>

      <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
        save
      </Button>
    </Card>
  );
}
