import { Grid } from "@mantine/core";
import { Card, Image, Text, Button } from "@mantine/core";
import { SimpleGrid } from "@mantine/core";
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
    <SimpleGrid>
      <Card shadow="sm" p="xl" component="a" target="_blank">
        <Card.Section>
          <p>{props.column.title}</p>
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
      <Cards column={props.column} />
    </SimpleGrid>
  );
}
