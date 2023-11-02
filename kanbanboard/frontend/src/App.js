import React from 'react';

import  './assets/scss/App.scss'
import data from './assets/json/data.json';
import Kanbanboard from './Kanbanboard';


function App() {
  // console.log(data);

  return (
    <div id={'App'} >
      <Kanbanboard />
    </div>
  );
}

export { App };