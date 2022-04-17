import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <Button
      variant="subtle"
      color="red"
      size="md"
      onClick={() => {
        navigate(`/`);
      }}
    >
      Fake-Trello
    </Button>
  );
}
