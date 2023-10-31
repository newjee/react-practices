import React from 'react';

  // props 버전
// function FoodListItem(props) {
//   console.log(props);
//   return (
      
//       // <li>Bread: 10</li>
//       <li>{props.name}: {props.count}</li>
//   );
// }

function FoodListItem({name, count}) {
  console.log();
  return (
    <li>{name}: {count}</li>
  );
}

export default FoodListItem;