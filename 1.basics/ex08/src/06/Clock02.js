    
import React from 'react';

function Clock01(props) {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // if (seconds < 10) {
  //   seconds = '0' + seconds;
  // }
  // 이 방법 보다는 삼항 연산자로...

  return (
    <div>
      {/* {14}:{33}:{30}{'AM'}       */}
      {/* {now.getHours()}:{now.getMinutes()}:{now.getSeconds()} {'AM'} */}
      {/* 위의 방법이 더 좋은 방법 변수값 찾아야해서...*/}
      {hours<10 ? '0'+hours : hours}:{minutes < 10 ? '0'+minutes : minutes}:{seconds < 10 ? '0'+seconds : seconds} {'AM'}

    </div>
  );
}

export default Clock01;