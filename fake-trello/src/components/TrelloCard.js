import { Card, Text, Group, Badge, Modal } from "@mantine/core";

import { useState } from "react";
import ExpandedCard from "./ExpandedCard";

export default function TrelloCard(props) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Card
        onClick={() => {
          setOpened(true);
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
      <Modal
        centered
        overlayOpacity={0.55}
        size={"70%"}
        withCloseButton={false}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <ExpandedCard id={props.card.id} card={props.card}></ExpandedCard>
      </Modal>
    </>
  );
}
