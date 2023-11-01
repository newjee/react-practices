import React from 'react';
import styles from './assets/scss/App.scss' ;

function App() {

  // console.log(styles.Header);
  return (
    <div id={'App'} className={styles.App}>
      <h1 className={styles.Header}>
        SASS & SCSS
      </h1>
    </div>
  );
}

export { App };