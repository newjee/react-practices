import React from 'react';
import styles from './assets/scss/TaskList.scss';

function TaskList({ tasks }) {
  return (
    <ul className={styles.TaskList}>
      {tasks.map((task) => (
        <li key={task.no} className={styles.TaskList__Task}>
          <input type="checkbox" checked={task.done} />
          {task.name}
          <a href="#" className={styles.TaskList__Task__remove}></a>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

