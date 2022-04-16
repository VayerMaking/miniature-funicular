import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DBConfig } from "./db";
import { initDB } from "react-indexed-db";
import { AppShell, Navbar, Header, Text } from "@mantine/core";
import Nav from "./components/Nav";
import Body from "./components/Body";

import Cards from "./components/TrelloCard";

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
        {/* <Routes>
          <Route path="/" element={<Cards />} />
        </Routes> */}
        <Body />
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
