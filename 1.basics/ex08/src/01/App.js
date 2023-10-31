import React from 'react';

function App() {

    return (
      <div>
        <h1>
          [01]
          <p>특징1 : HTML과의 차이점</p>

          { /* 1. 속성 -> CamelCase */ }
          <input type='text' maxLength={10} />

          { /* 2. Element는 꼭 닫기! */ }
          <br />
          <hr />

          {
            /* 3. JSX Element의 속성 이름은 DOM API와 일치  */
            // <h4 id='title', class='header'> 타이틀 </h4>
            // document.getElementById('title').className = 'header'
          }
            <h4 id='title' className= 'header' > 타이틀 </h4>  

          <br />
          <hr />

        </h1>
        Hello World
      </div>
    );

}

export {App};