import { Card, Text, TextInput, Group, Button, Badge } from "@mantine/core";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";

export default function ExpandedCard(props) {
  const [card, setCard] = useState([]);
  const [input, setInput] = useState("");

  const { id } = useParams();
  return (
    <Card style={{ width: 400, marginBottom: 10 }} shadow="sm" p="lg">
      <Group position="apart" style={{ marginBottom: 5 }}>
        <Text weight={500}>expanded {props.cardTitle}</Text>
        {/* TODO dynamicaly load colors for labels from props */}
        <Badge color="pink" variant="light"></Badge>
      </Group>

      <Text size="sm" style={{ lineHeight: 1.5 }}>
        {props.cardContent}
      </Text>
      <TextInput value={input} onChange={(e) => setInput(e.target.value)} />

      <Button
        variant="light"
        color="blue"
        fullWidth
        style={{ marginTop: 14 }}
        onClick={console.log("saved")}
      >
        save
      </Button>
    </Card>
  );
}
