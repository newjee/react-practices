
import React from 'react';

function Clock(props) {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return (
    
    /* 
      comment01: JSX OUTSIDE는 JS 구문(주석 구문)이 가능
    */

    <div
      /**
       * comment02 : JSX Element Tag 안에도 주석 가능 (비추...)
       * 
       */

      className='clock'
      title='시계'>
      {
        /**
         * comment03 : 표현식이 실행되는 블록 INSIDE에서 주석 (강추)
         * 
         */
      }

      {
        /**
         * comment04 : JSX !== HTML!!!
         * <!-- --> 주석 사용 NOP!
         * 
         */
      }
      {':'}
      {/* // comment05: JSX INSIDE는 화면에 출력 */}


      {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
      {':'}
      {('0' + minutes).slice(-2)}
      {':'}
      {('0' + seconds).slice(-2)}
      {' '}
      {hours >12 ? 'PM':'AM'}


    </div>
  );
}

export default Clock;