import React from "react";
import ClickBtn from "./ClickBtn";

const MarkettingModule = ({ marketting, markettingCost, incMarketting, funds }) => {
  return (
    <div className="module">
      <h3>Marketing</h3>
      <p>Current level: {marketting}</p>
      <p>Upgrade Cost: £{(markettingCost / 100).toFixed(2)}</p>
      <ClickBtn clickFunc={incMarketting} label="Improve marketing" isDisabled={funds < markettingCost} />
    </div>
  );
};

export default MarkettingModule;
