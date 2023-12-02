import { useState } from "react";
import Cards from "../../Components/Cards/Cards";
import SearchBar from "../../Components/SearchBar/SearchBar";
import styles from "./Home.module.css";

function Home(params) {
  const [searchName, setSearchName] = useState("");
  return (
    <div className={styles.container}>
      <p>aqui empieza el home</p>
      <SearchBar searchName={searchName} setSearchName={setSearchName} />
      <Cards searchName={searchName} />
    </div>
  );
}
export default Home;
