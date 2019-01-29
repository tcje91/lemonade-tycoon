import React from "react";

const StatList = ({ lemondadeCount, lemonadeStock, funds, price, lemons, lemonsPrice }) => {
  return (
    <div>
      <p>Lemonades made: {lemondadeCount}</p>
      <p>Lemonades in stock: {lemonadeStock}</p>
      <p>Current funds: £{(funds/100).toFixed(2)}</p>
      <p>Lemonade price: £{(price/100).toFixed(2)}</p>
      <p>Lemons: {lemons}</p>
      <p>Lemons price: £{(lemonsPrice/100).toFixed(2)}</p>
    </div>
  );
};

export default StatList;
