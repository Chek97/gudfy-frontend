import { Link } from "react-router-dom";
import styles from '../styles/main.module.css';

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Gudfy Prueba Tecnica</h1>
        <p>por <strong>Cristian Checa</strong></p>
      </header>
      <p className={styles.text}>A continuacion encontraras 3 opciones que te llevaran a las diferentes actividades de la prueba, selecciona la que deseas ver:</p>
      <div className={styles.buttonContainer}>
        <Link to="/counter" className={styles.button}>
          <i className={`fa fa-plus ${styles.icon}`} aria-hidden="true"></i>Counter
        </Link>
        <Link to="/revert" className={styles.button}>
          <i className={`fa fa-arrows-left-right  ${styles.icon}`} aria-hidden="true"></i>Palabra al reves
        </Link>
        <Link to="/tasks" className={styles.button}>
         <i className={`fa fa-list ${styles.icon}`} aria-hidden="true"></i>  Lista de tareas
        </Link>
      </div>
    </div>
  )
}
