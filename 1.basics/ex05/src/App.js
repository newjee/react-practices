import React from 'react';

function App() {
  // const App = document.createElement('div');
  // App.textContent = "Hello World";

  //1) 1차 수정
  const App = React.createElement('div', null, 'Hello World');

  return App;

  // //2차 수정
  //   return (
  //     <div>
  //       Hello World
  //     </div>
  //   );

}

export {App};