import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DBConfig } from "./db";
import { initDB } from "react-indexed-db";
import { AppShell, Navbar, Header, Text } from "@mantine/core";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Board from "./components/Board";

import Cards from "./routes/Cards";
import ExpandedCard from "./components/ExpandedCard";

initDB(DBConfig);

function App() {
  return (
    <BrowserRouter>
      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
            <Nav />
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/board/id=" element={<Board />} />
          <Route path="/card/:id" element={<ExpandedCard />} />
        </Routes>

        {/* <Body /> */}
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
