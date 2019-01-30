import React from "react";
import ClickBtn from "./ClickBtn";

const LemonsModule = ({ lemons, lemonsPrice, buyLemons, funds }) => {
  return (
    <div className="module">
      <h3>Manufacturing</h3>
      <p className={!lemons ? "warning" : ""}>Lemons: {lemons}</p>
      <p>Lemons cost: £{(lemonsPrice / 100).toFixed(2)}</p>
      <ClickBtn
        clickFunc={buyLemons}
        label="Buy lemons"
        isDisabled={funds < lemonsPrice}
      />
    </div>
  );
};

export default LemonsModule;
