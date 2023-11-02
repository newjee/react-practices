import React from 'react';
import styles from './assets/scss/KanbanBoard.scss';
import data from './assets/json/data';
import Card from './Card';
import CardList from './CardList';


function Kanbanboard() {

  const cardsToDo = data.filter(card => card.status === 'ToDo');
  const cardsDoing = data.filter(card => card.status === 'Doing');
  const cardsDone = data.filter(card => card.status === 'Done');
  return (
    <div className={styles.KanbanBoard}>

      <CardList cardsToDo={cardsToDo} cardsDoing={cardsDoing} cardsDone={cardsDone} />
      

    </div>
  );
}


export default Kanbanboard;