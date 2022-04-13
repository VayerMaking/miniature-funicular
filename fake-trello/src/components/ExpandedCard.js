import { Card, Text, Image, Group, Button, Badge } from "@mantine/core";
import { useParams } from "react-router-dom";

export default function ExpandedCard() {
  const { id } = useParams();
  console.log("id", id);
  return (
    <div>
      <h1>expandend {id}</h1>
    </div>
  );
}
