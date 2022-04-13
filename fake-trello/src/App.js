import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./routes/Cards";
import TrelloCard from "./components/TrelloCard";
import ExpandedCard from "./components/ExpandedCard";
import { DBConfig } from "./db";
import { initDB } from "react-indexed-db";

initDB(DBConfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Cards />}> */}
        <Route path="/" element={<Cards />} />
        <Route path="/card/:id" element={<ExpandedCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
