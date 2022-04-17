import { useIndexedDB } from "react-indexed-db";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Button } from "@mantine/core";

export default function Boards(props) {
  const { getAll } = useIndexedDB("boards");
  const { add } = useIndexedDB("boards");
  const [boards, setBoard] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getAll().then((boardsDB) => {
      setBoard(boardsDB);
    });
  }, []);

  const handleClick = () => {
    add({ name: "BOARD1" }).then((error) => {
      console.log(error);
    });
  };

  const showBoard = () => {
    navigate(`/board/id=`);
  };

  return (
    <div>
      {Object.keys(boards).map((board) => (
        <span onClick={showBoard} key={board}>
          {board}
        </span>
      ))}
      <Button onClick={handleClick}>Add board</Button>
    </div>
  );
}
