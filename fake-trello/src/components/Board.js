import { useIndexedDB } from "react-indexed-db";
import React, { useState, useEffect } from "react";
import { Button, Grid, Modal, TextInput, ScrollArea } from "@mantine/core";
import Column from "./Column";

export default function Board() {
  const { getAll } = useIndexedDB("columns");
  const { add } = useIndexedDB("columns");
  const [opened, setOpened] = useState(false);

  const [columns, setColumns] = useState([]);
  const [columnTitle, setColumnTitle] = useState([]);

  useEffect(() => {
    getAll().then((columns) => {
      setColumns(columns);
    });
    console.log(columns);
  }, []);

  const handleClick = () => {
    setOpened(true);
  };

  function AddColumn(columnTitle) {
    const { add } = useIndexedDB("columns");

    add({
      title: columnTitle,
    }).then((error) => {
      console.log(error);
    });
  }

  return (
    <ScrollArea style={{ width: "120%" }}>
      <div>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Column name"
        >
          <TextInput
            placeholder="title"
            weight={500}
            onChange={(event) => setColumnTitle(event.currentTarget.value)}
          ></TextInput>
          <Button
            onClick={() => {
              AddColumn(columnTitle);
              // setOpened(false);
              // window.location.reload();
            }}
          >
            Set title
          </Button>
        </Modal>
        <Button onClick={handleClick}>Add COLUMN</Button>
        <div>
          <Grid justify="flex-start" flex-direction="row">
            {columns.map((column) => (
              <Grid.Col flex-direction="row" span={1}>
                <Column column={column} />
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </div>
    </ScrollArea>
  );
}
