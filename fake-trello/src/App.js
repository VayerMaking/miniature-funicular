import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./routes/Cards";
import Contact from "./routes/Contacts";
import TrelloCard from "./components/TrelloCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards />}>
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/card:id" element={<TrelloCard />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
