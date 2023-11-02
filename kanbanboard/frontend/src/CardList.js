import React from 'react';
import styles from './assets/scss/CardList.scss';
import Card from './Card';

function CardList({ cardsToDo, cardsDoing, cardsDone }) {

  return (
    <div className={styles.CardList}>
      <h1>To Do</h1>
      {
        cardsToDo.map((card) => (
          <Card title={card.title} description={card.description} tasks={card.tasks} />)
        )
      }
      <h1>In Progress</h1>
      {
        cardsDoing.map((card) => (
          <Card title={card.title} description={card.description} tasks={card.tasks} />)
        )
      }
      <h1>Done</h1>
      {
        cardsDone.map((card) => (
          <Card title={card.title} description={card.description} tasks={card.tasks} />)
        )
      }
    </div>
  );
}

export default CardList;
