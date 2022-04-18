import React from "react";
import NewTrelloCard from "./NewTrelloCard";
import TrelloCard from "./TrelloCard";
import { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";

export default function Cards(props) {
  const [cards, setCards] = useState([]);
  const { getAll } = useIndexedDB("cards");

  useEffect(() => {
    getAll().then((cardsFromDB) => {
      setCards(
        cardsFromDB
          .filter((card) => card.column === props.column)
          .filter((card) => card.is_archived === false)
      );
    });
  }, []);

  return (
    <div>
      <NewTrelloCard align="center" column={props.column} />

      {cards &&
        cards.length > 0 &&
        cards
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((card) => <TrelloCard align="center" card={card} />)}
    </div>
  );
}
