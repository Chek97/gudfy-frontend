import { useState } from 'react';
import { Back } from '../components';
import styles from '../styles/counter.module.css';

export const CounterPage = () => {

  const [counter, setCounter] = useState(0);

  const handleChange = (key) => {
    if (key === "increment") {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>CONTADOR</h1>
        <p>Incrementa o decrementa el valor del numero con los dos botones</p>
      </header>
      <Back route={"/"} />
      <p className={styles.text}>Contador: <span className={styles.count}>{counter}</span></p>
      <div className={styles.counterContainer}>
        <button onClick={() => handleChange("increment")} className={`${styles.button} ${styles.addButton}`}><i className="fa fa-plus" aria-hidden="true"></i> Incrementar</button>
        <button onClick={() => handleChange("decrement")} className={`${styles.button} ${styles.restButton}`}><i className="fa fa-minus" aria-hidden="true"></i> Decrementar</button>
      </div>
    </div>
  )
}
