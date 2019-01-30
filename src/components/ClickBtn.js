import React from 'react';

const ClickBtn = ({ clickFunc, label, className, isDisabled = false }) => {
  return (
      <button className={className} onClick={clickFunc} disabled={isDisabled}>{label}</button>
  )
}

export default ClickBtn