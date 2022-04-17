import { useIndexedDB } from "react-indexed-db";
import React, { useState, useEffect } from "react";
import { Button } from "@mantine/core";

export default function Boards(props) {
  const { getAll } = useIndexedDB("boards");
  const { add } = useIndexedDB("boards");

  const [boards, setBoard] = useState({});

  useEffect(() => {
    getAll().then(
      (boardsDB) => {
        setBoard(boardsDB);
      }
    );
  }, []);

  const handleClick = () => {
    add({ name: "BOARD1", cards: {} }).then((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      {Object.keys(boards).map((board) => (
        <span key={board}>{board}</span>
      ))}
      <Button onClick={handleClick}>Add board</Button>
    </div>
  );
}
