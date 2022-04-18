import { useIndexedDB } from "react-indexed-db";
import React, { useState, useEffect } from "react";
import { Button, Modal, TextInput } from "@mantine/core";
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
    // add({ title: "title", cards: {} }).then((error) => {
    //   console.log(error);
    // });
    // window.location.reload();
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
            console.log(columnTitle)
          }}
        >
          Set title
        </Button>
      </Modal>
      {columns.map((column) => (
        <Column column={column} />
      ))}

      <Button onClick={handleClick}>Add COLUMN</Button>
    </div>
  );
}
