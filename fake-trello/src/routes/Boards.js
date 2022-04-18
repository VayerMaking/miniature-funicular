import { useIndexedDB } from "react-indexed-db";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Input,
  Grid,
  TextInput,
  Group,
  Card,
  Text,
} from "@mantine/core";

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

  function DeleteBoard(boardId) {
    const { deleteRecord } = useIndexedDB("boards");
    deleteRecord(boardId).then((error) => {
      console.log(error);
    });
  }

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
            console.log(boardTitle);
          }}
        >
          {" "}
          Set title
        </Button>
      </Modal>
      <Grid>
        {boards.map((board) => (
          <Card
            key={board.id}
            onClick={() => {
              showBoard();
            }}
            style={{
              width: 300,
              margin: 10,
              border: "1px solid rgba(0, 0, 0, .3)",
              borderRadius: 10,
            }}
            shadow="sm"
            p="lg"
          >
            <Text align="center" weight={500}>
              {board.name}
            </Text>
            <Button
              variant="light"
              color="red"
              fullWidth
              style={{ marginTop: 14 }}
              onClick={() => {
                DeleteBoard(board.id);
                window.location.reload();
              }}
            >
              delete
            </Button>
          </Card>
        ))}
      </Grid>
      <Button onClick={handleClick}>Add board</Button>
    </div>
  );
}
