import React from 'react';
import FoodListItem from './FoodListItem';


function FoodList({foods}) {
  console.log(foods);

  // const foodItems = [];
  // foods.forEach((food) => {
  //   foodItems.push(<FoodListItem name ={food.name} count={food.count} />);
    
  // });

  return (
      <ul>
        {
          foods.map(food => <FoodListItem
            key={food.no}
            name={food.name}
            count={food.count} />)
        }
      </ul>
  );
}

export default FoodList;