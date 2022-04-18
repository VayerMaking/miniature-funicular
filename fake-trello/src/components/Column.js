import { Card, SimpleGrid, Text } from "@mantine/core";
import Cards from "./Cards";

export default function Column(props) {
  console.log(props.column.name);
  return (
    <SimpleGrid display="contents" flex-wrap="nowrap" flex-direction="row">
      <Card
        style={{
          width: 320,
          // display: "contents"
        }}
        shadow="sm"
        p="xl"
        component="a"
        target="_blank"
      >
        <Card.Section>
          <div>
            <Text align="center">{props.column.title}</Text>
            <Cards align="center" column={props.column} />
          </div>
        </Card.Section>
      </Card>
    </SimpleGrid>
  );
}
