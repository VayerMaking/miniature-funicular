import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./routes/Cards";
import TrelloCard from "./components/TrelloCard";
import ExpandedCard from "./components/ExpandedCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Cards />}> */}
        <Route path="/cards" element={<Cards />} />
        <Route path="/card/:id" element={<TrelloCard />} />
        <Route path="/card/expanded/:id" element={<ExpandedCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
