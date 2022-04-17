import { Card } from "@mantine/core";

import { SimpleGrid } from "@mantine/core";

export default function Column(props) {
  return (
    <SimpleGrid>
      <Card shadow="sm" p="xl" component="a" target="_blank">
        <Card.Section>
          <p>column id: {props.columns}</p>
        </Card.Section>
      </Card>
    </SimpleGrid>
  );
}
