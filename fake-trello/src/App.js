import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DBConfig } from "./db";
import { initDB } from "react-indexed-db";
import { AppShell, Header } from "@mantine/core";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Board from "./components/Board";
import ExpandedCard from "./components/ExpandedCard";

initDB(DBConfig);

function App() {
  localStorage.setItem("user", "test user");

  return (
    <BrowserRouter>
      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
            <Nav />
          </Header>
        }
        styles={{
          backgroundColor: "white",
        }}
      >
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route path="/board/:id" element={<Board />} />
          <Route path="/card/:id" element={<ExpandedCard />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
