import React from "react";
import ClickBtn from "./ClickBtn";

const LemonSqueezerModule = ({ addSqueezer, squeezerCost, squeezerCount }) => {
  return (
    <div>
      <h3>Lemon Squeezers</h3>
      <ClickBtn label="Hire a lemon squeezer" clickFunc={addSqueezer}/>
      <p>Current Lemon squeezers: {squeezerCount}</p>
      <p>Squeezer cost: £{(squeezerCost/100).toFixed(2)}</p>
    </div>
  );
};

export default LemonSqueezerModule;
