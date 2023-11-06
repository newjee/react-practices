import React from 'react';

import styles from './assets/scss/App.scss'
import React, {state, userState} from 'react';
import ResisterForm from './ResisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
// import data from './assets/json/data.json';

function App() {
  console.log(data);

  

  return (
    <div id={'App'} >
      Emaillist

      <ResisterForm />
      <SearchBar />
      <Emaillist emails ={data}/>
      

    </div>
  );
}

export { App };