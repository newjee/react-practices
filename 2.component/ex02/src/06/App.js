import React from 'react';
import styles from './assets/scss/App.scss';
import styled from 'styled-components';


const StyledH1 = styled.h1`
        width: 300px;
        font-size: 20px;
        text-align: 100px auto;
        margin: 100px auto;
        padding: 20px;
        border: 2px solid #999;
        color: #1133fe;
        background-color: #111111
        `;

const StyledDiv = styled.div`
        text-align: center;
        `;

function App() {

  // console.log(styles.Header);
  return (
    <StyledDiv id={'App'} className={styles.App}>
      <StyledH1>
        CSS in JS - Styled Component


      </StyledH1>
      
    </StyledDiv>
  );
}

export { App };