import React from "react";
import ClickBtn from "./ClickBtn";

const LemonSqueezerModule = ({ addSqueezer, squeezerCost, squeezerCount, funds }) => {
  return (
    <div className="module">
      <h3>Lemon Squeezers</h3>
      <p>Current Lemon squeezers: {squeezerCount}</p>
      <p>Squeezer cost: £{(squeezerCost / 100).toFixed(2)}</p>
      <ClickBtn label="Hire lemon squeezer" clickFunc={addSqueezer} isDisabled={funds < squeezerCost} />
    </div>
  );
};

export default LemonSqueezerModule;
