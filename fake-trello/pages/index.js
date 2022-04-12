import Head from "next/head";
import Image from "next/image";
import TrelloCard from "../components/TrelloCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    
       <>
       <TrelloCard cardTitle="Lorem IPosum" cardContent="lorem iposum lorem iposum lorem iposum lorem iposum" />
       <TrelloCard cardTitle="asdf" cardContent="lorem iposum lorem iposum lorem iposum lorem iposum" />
       <TrelloCard cardTitle="qwerty" cardContent="lorem iposum lorem iposum lorem iposum lorem iposum" />

       </>

   
  );
}
