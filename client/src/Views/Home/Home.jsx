import { useState } from "react";
import Cards from "../../Components/Cards/Cards";
import SearchBar from "../../Components/SearchBar/SearchBar";
import PageBar from "../../Components/PageBar/PageBar";
import NavBar from "../../Components/NavBar/NavBar";
import styles from "./Home.module.css";

function Home(params) {
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(1);
  return (
    <div className={styles.container}>
      <NavBar />
      <p>aqui empieza el home</p>
      <SearchBar searchName={searchName} setSearchName={setSearchName} />
      <Cards searchName={searchName} setPage={setPage} page={page} />
      <PageBar setPage={setPage} page={page} />
    </div>
  );
}
export default Home;
