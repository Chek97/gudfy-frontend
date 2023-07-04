import { useState } from "react";
import { Back, Error } from "../components";
import styles from '../styles/revert.module.css';

export const RevertPage = () => {

  const [words, setWords] = useState("");
  const [word, setWord] = useState("");
  const [error, setError] = useState({
    ok: false,
    message: ""
  });

  const showText = words !== "" ? styles.revert : "";

  const handleChange = (e) => {
    setWord(e.target.value);
    setError({
      ok: false,
      message: ""
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dividedWords = word.split(" ");

    if(dividedWords.length < 2){
      setError({
        ok: true,
        message: "Solo escribiste una palabra o muchas palabras pegadas, el resultado es igual"
      });
      return;
    }
    
    setWord("");
    setWords(dividedWords.reverse().join(" "));
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>PALABRA AL REVES</h1>
        <p>Escribe palabras y las regresara en orden inverso</p>
      </header>
      <Back route={"/"} />
      <div className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input 
            type="text" 
            placeholder="Escribe las palabras aqui" 
            onChange={handleChange}
            name="word"
            value={word}
            className={styles.input}
          />
          <button type="submit" className={styles.submit}>Revertir</button>
        </form>
        {error.ok && <Error message={error.message} />}
        <p className={styles.text}>Palabras con orden invertido: <span className={showText}>{words}</span></p>
      </div>
    </div>
  )
}
