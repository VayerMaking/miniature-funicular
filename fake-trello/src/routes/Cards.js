import React from "react";
import NewTrelloCard from "../components/NewTrelloCard";
import TrelloCard from "../components/TrelloCard";
import { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const { getAll } = useIndexedDB("cards");

  useEffect(() => {
    getAll().then((cardsFromDB) => {
      setCards(cardsFromDB);
    });
  }, []);

  return (
    <div>
      <NewTrelloCard />
      {cards
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((card) => (
          <TrelloCard card={card} />
        ))}
    </div>
  );
};

export default Cards;
