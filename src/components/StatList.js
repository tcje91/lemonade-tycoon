import React from "react";

const StatList = ({
  lemondadeCount,
  lemonadeStock,
  funds,
  price,
  lemons,
  lemonsPrice
}) => {
  return (
    <div className="module">
      <h3>Overview</h3>
      <p>Lemonades made: {lemondadeCount}</p>
      <p className={!lemonadeStock ? "warning" : ""}>
        Lemonades in stock: {lemonadeStock}
      </p>
      <p className={!funds ? "warning" : ""}>
        Current funds: £{(funds / 100).toFixed(2)}
      </p>
      <p>Lemonade price: £{(price / 100).toFixed(2)}</p>
      <p className={!lemons ? "warning" : ""}>Lemons: {lemons}</p>
      <p>Lemons price: £{(lemonsPrice / 100).toFixed(2)}</p>
    </div>
  );
};

export default StatList;
