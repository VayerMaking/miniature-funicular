import { Card, SimpleGrid, Text, Button } from "@mantine/core";
import Cards from "./Cards";
import { useIndexedDB } from "react-indexed-db";

export default function Column(props) {
  function DeleteColumn(columnId) {
    const { deleteRecord } = useIndexedDB("columns");
    deleteRecord(columnId).then((error) => {
      console.log(error);
    });
  }
  return (
    <Card
      style={{
        width: 320,
      }}
      shadow="sm"
      p="xl"
    >
      <Card.Section>
        <div>
          <Text align="center">{props.column.title}</Text>
          <Cards align="center" column={props.column} />
        </div>
      </Card.Section>
      <Button
        variant="light"
        color="red"
        fullWidth
        style={{ marginTop: 14 }}
        onClick={() => {
          DeleteColumn(props.column.id);
          window.location.reload();
        }}
      >
        delete
      </Button>
    </Card>
  );
}
