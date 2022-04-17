import { useIndexedDB } from "react-indexed-db";
import React, { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import Columns from "./Column";
import { Grid } from "@mantine/core";

export default function Board() {
  const { getAll } = useIndexedDB("columns");
  const { add } = useIndexedDB("columns");

  const [columns, setColumn] = useState({});

  useEffect(() => {
    getAll().then((columns) => {
      setColumn(columns);
    });
  }, []);

  const handleClick = () => {
    add({ title: "title", cards: {} }).then((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      {Object.keys(columns).map((columns) => (
        <Columns columns={columns} />
        // <span key={columns}>{columns}</span>
      ))}

      <Button onClick={handleClick}>Add COLUMN</Button>
    </div>
  );
}
