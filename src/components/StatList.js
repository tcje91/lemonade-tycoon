import React from "react";

const StatList = ({
  lemonadeCount,
  lemonadeStock,
  funds,
  price,
}) => {
  return (
    <div className="module">
      <h3>Overview</h3>
      <p>Lemonades made: {lemonadeCount}</p>
      <p className={!lemonadeStock ? "warning" : ""}>
        Lemonades in stock: {lemonadeStock}
      </p>
      <p className={!funds ? "warning" : ""}>
        Current funds: £{(funds / 100).toFixed(2)}
      </p>
      <p>Lemonade price: £{(price / 100).toFixed(2)}</p>
    </div>
  );
};

export default StatList;
