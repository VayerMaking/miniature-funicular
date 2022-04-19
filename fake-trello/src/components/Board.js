import { useIndexedDB } from "react-indexed-db";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Button, Grid, Modal, TextInput, ScrollArea } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

import Column from "./Column";

export default function Board() {
  const { getAll } = useIndexedDB("columns");
  const { add } = useIndexedDB("columns");
  const [opened, setOpened] = useState(false);
  let { id } = useParams();
  const [columns, setColumns] = useState([]);
  const [columnTitle, setColumnTitle] = useState([]);

  useEffect(() => {
    getAll().then((columns) => {
      setColumns(columns);
    });
    console.log(columns);
  }, []);

  const handleClick = () => {
    if (columns.length >= 4) {
      showNotification({
        position: "bottom-center",
        color: "red",
        title: "Premium",
        message: "Hey there, u have dicovered a premium feature",
      });
    }
    setOpened(true);
  };

  function AddColumn(columnTitle) {
    const { add } = useIndexedDB("columns");

    add({
      title: columnTitle,
      board: id,
    }).then((error) => {
      console.log(error);
    });
  }

  return (
    <ScrollArea style={{ width: "100%", height: "100%" }}>
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
          <Grid justify="space-evenly" style={{ flexWrap: "nowrap" }}>
            {columns
              .filter((column) => column.board == id)
              .map((column) => (
                // <Grid.Col flex-direction="row" span={1}>
                <Grid.Col span={3}>
                  {console.log(columns)}
                  <Column column={column} />
                </Grid.Col>
              ))}
          </Grid>
        </div>
      </div>
    </ScrollArea>
  );
}
