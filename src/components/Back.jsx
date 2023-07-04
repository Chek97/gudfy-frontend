import { useNavigate } from 'react-router-dom';
import styles from '../styles/components.module.css';

export const Back = ({route}) => {
  
    const navigate = useNavigate();

    const handleNavigate = () =>  {
        navigate(route);
    }
  
    return (
    <div className={styles.container}>
        <button onClick={handleNavigate} className={styles.button}>
            <i className="fa fa-arrow-left" aria-hidden="true"></i> Volver
        </button>
    </div>
  )
}
