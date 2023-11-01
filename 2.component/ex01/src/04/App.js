import React from 'react';
import MyComponent from './MyComponent';


function App() {
  
  return (
    <div id={'App'}>
      <h1>
        [04]
      </h1>
      <MyComponent 
          // props01={'test'}
          // props02={'test'}
          // props03={true}
          // props04={ {no:1, name:'희도'}}
          props05={ ['희도', '1'] }
          props06={ () => 'function'}
          props07={10}
          props08={ [true, false]}
          props09={
            {
              no : 1,
              name :'희도',
              email: 'gmail'
            }
          }

           />
    </div>
  );
}

export { App };