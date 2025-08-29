import React from "react";
import "./index.css";

function TextField ({labelText, onChange}) {

  return (
    <div className="textfield">
        <label data-testid="label">{labelText}</label>
        <input data-testid="input" type="text" value={typeof value !== 'undefined' ? value : ''} onChange={onChange} />
    </div>
  );
}

export default TextField;