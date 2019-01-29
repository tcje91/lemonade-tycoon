import React from 'react';

const ClickBtn = ({ clickFunc, label, className }) => {
  return (
      <button className={className} onClick={clickFunc}>{label}</button>
  )
}

export default ClickBtn