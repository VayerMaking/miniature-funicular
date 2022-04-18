import { Grid } from "@mantine/core";
import { Card, Image, Text } from "@mantine/core";
import { SimpleGrid } from "@mantine/core";
import Cards from "./Cards";

export default function Column(props) {
  console.log(props.column.name);
  return (
    <SimpleGrid>
      <Card shadow="sm" p="xl" component="a" target="_blank">
        <Card.Section>
          <p>{props.column.title}</p>
        </Card.Section>
      </Card>
      <Cards column={props.column} />
    </SimpleGrid>
  );
}
