import React, { useState } from "react";
import './App.css';
import TextField from "./components/textField";
import 'h8k-components';

const title = "Text Append";

function App() {


  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const appendedText = `${firstText}${firstText && secondText ? " " : ""}${secondText}`;

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-centre justify-content-center mt-50">
        <section className="layout-column">
          <div data-testid="first-text">
            <TextField labelText={'First Text'} value={firstText} onChange={e => setFirstText(e.target.value)} />
          </div>
          <div data-testid="second-text">
            <TextField labelText={'Second Text'} value={secondText} onChange={e => setSecondText(e.target.value)} />
          </div>
          <label className="mt-50 text-align-center">
            Appended Text is:
          </label>
          <label className="mt-10 finalText" data-testid="final-text">
            {appendedText}
          </label>
        </section>
      </div>
    </div>
  );
}

export default App;
