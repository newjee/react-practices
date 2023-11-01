import React from 'react';

function App() {
  const h1Style = {
    width:200,
    height:'100px',
    color: '#111',
    backgroundColor: '#eeff88'
      };


  return (
    <div id={'App'}>
      <h1 style={h1Style}>
        Inline Styling
      </h1>
    </div>
  );
}

export { App };