import React from 'react';
import styles from './assets/css/App.css' ;

function App() {

  // console.log(styles.Header);
  return (
    <div id={'App'}>
      <h1 className={styles.Header}>
        CSS Module II
      </h1>
    </div>
  );
}

export { App };