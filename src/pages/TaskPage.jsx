import { useEffect } from 'react';
import { useState } from 'react';
import { Back } from '../components/Back';
import styles from '../styles/task.module.css';

export const TaskPage = () => {

  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    completed: false
  });
  const [task, setTask] = useState('');

  const [loading, setLoading] = useState(true);
  const { title, description } = form;

  const URL = 'http://127.0.0.1:8000/api/tasks/';

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  }

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const response = await request.json();
      console.log(response);
      setForm({
        title: '',
        description: '',
        completed: false
      });
    } catch (error) {
      console.error(error);
    }
  }

  const handleCompleted = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch(`http://127.0.0.1:8000/api/task/${task}`, {
        method: 'PUT',
        body: JSON.stringify({ completed: true }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const response = await request.json();
      console.log(response);
      setTask("");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const getTasks = async () => {
      try {
        const request = await fetch(URL);
        const data = await request.json();
        setTasks(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    getTasks();
  }, [tasks]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>LISTA DE TAREAS</h1>
      </header>
      <Back route={"/"} />
      <div className={styles.content}>
        {loading ? (<p>Espere</p>) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.head}>#</th>
                <th className={styles.head}>TAREA</th>
                <th className={styles.head}>DESCRIPCION</th>
                <th className={styles.head}>ESTADO</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td className={styles.cell}>{task.id}</td>
                  <td className={styles.cell}>{task.title}</td>
                  <td className={styles.cell}>{task.description}</td>
                  <td className={`${styles.cell} ${task.completed ? styles.completed : styles.progress}`}>{task.completed ? "Completada" : "En proceso"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className={styles.formContainer}>
          <form className={styles.create} onSubmit={handleCreate}>
            <h2 className={styles.formTitle}>Crear Tarea</h2>
            <input
              type="text"
              placeholder="titulo"
              className={styles.input}
              name="title"
              onChange={handleChange}
              value={title}
            />
            <textarea
              name="description"
              cols="30"
              rows="10"
              onChange={handleChange}
              placeholder="Descripcion"
              className={styles.input}
              value={description}
            ></textarea>
            <button type='submit' className={styles.submit}>Crear Tarea</button>
          </form>
          <form onSubmit={handleCompleted}>
            <h2 className={styles.formTitle}>Completar Tarea</h2>
            <input
              type="text"
              name='task'
              onChange={handleTaskChange}
              value={task}
              className={styles.input}
              placeholder="Introduce el numero de la tarea que quieres completar"
            />
            <button type='submit' className={styles.submit1}>Completar Tarea</button>
          </form>
        </div>
      </div>
    </div>
  )
}
