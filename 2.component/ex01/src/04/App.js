import React from 'react';
import FoodList from './FoodList';

function App() {
  
  return (
    <div id={'App'}>
      <h1>
        [04]
      </h1>
      <MyComponent 
          props01={10}
          props02={''}
          props03={true}
          props04={ {no:1, name:'희도'}}
          props05={ [] }
          props06={ () => {}} />
    </div>
  );
}

export { App };