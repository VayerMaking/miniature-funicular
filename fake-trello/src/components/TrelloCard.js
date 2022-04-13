import { Card, Text, Image, Group, Button, Badge } from "@mantine/core";
import { useParams, useNavigate } from "react-router-dom";
import ExpandedCard from "../components/ExpandedCard";

export default function TrelloCard(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`/card/expanded/${id}`);
      }}
      style={{ width: 200, marginBottom: 10 }}
      shadow="sm"
      p="lg"
    >
      <h1>{id}</h1>
      <Group position="apart" style={{ marginBottom: 5 }}>
        <Text weight={500}>{props.cardTitle}</Text>
        {/* TODO dynamicaly load colors for labels from props */}
        <Badge color="pink" variant="light"></Badge>
      </Group>

      <Text size="sm" style={{ lineHeight: 1.5 }}>
        {props.cardContent}
      </Text>

      <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
        save
      </Button>
    </Card>
  );
}
