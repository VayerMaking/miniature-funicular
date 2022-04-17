import { useIndexedDB } from "react-indexed-db";
import React, { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import Column from "./Column";
import { Grid } from "@mantine/core";

export default function Board() {
  const { getAll } = useIndexedDB("columns");
  const { add } = useIndexedDB("columns");

  const [columns, setColumns] = useState({});

  useEffect(() => {
    getAll().then((columns) => {
      setColumns(columns);
    });
  }, []);

  const handleClick = () => {
    add({ title: "title", cards: {} }).then((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      {Object.keys(columns).map((column) => (
        <Column column={column} />
        // <span key={columns}>{columns}</span>
      ))}

      <Button onClick={handleClick}>Add COLUMN</Button>
    </div>
  );
}
