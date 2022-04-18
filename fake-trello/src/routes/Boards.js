import { useIndexedDB } from "react-indexed-db";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Button, Modal, Input, Grid, TextInput } from "@mantine/core";

export default function Boards() {
  const { getAll } = useIndexedDB("boards");
  const { add } = useIndexedDB("cards");
  const [boards, setBoard] = useState([]);
  const [boardTitle, setBoardTitle] = useState("");
  const [input, setInput] = useState("");
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const showBoard = () => {
    navigate(`/board/id=`);
  };

  const handleClick = () => {
    setOpened(true);
  };

  useEffect(() => {
    getAll().then((boardsDB) => {
      setBoard(boardsDB);
    });
  }, []);

  function GetName(boardTitle) {
    const { add } = useIndexedDB("boards");

    add({
      name: boardTitle,
    }).then((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Board name"
      >
        <TextInput
          placeholder="title"
          weight={500}
          onChange={(event) => setBoardTitle(event.currentTarget.value)}
        ></TextInput>
        <Button
          onClick={() => {
            GetName(boardTitle);
            setOpened(false)
            window.location.reload();
          }}
        >
          {" "}
          Set title
        </Button>
      </Modal>

      {boards.map(
        (board) => (
          console.log(board),
          (
            <span key={board.id} flex-direction="column">
              <Button
                flex-direction="column"
                onClick={showBoard}
                variant="white"
                color="dark"
              >
                <p>{board.name}</p>
              </Button>
            </span>
          )
        )
      )}
      <Button onClick={handleClick}>Add board</Button>
    </div>
  );
}
