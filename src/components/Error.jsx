import styles from '../styles/components.module.css';

export const Error = ({message}) => {
  return (
    <div className={styles.errorContainer}>
        <p>{message}</p>
    </div>
  )
}
