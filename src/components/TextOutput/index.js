import React, {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Form,Button } from "react-bootstrap";


const TextOutput = () => {

  const [iscopied, setIsCopied] = useState(0);

  iscopied = {
    value: '',
    copied: false,
  };

  return (
    <>
      <div>
        <input value={state.value}
          onChange={({target: {value}}) => setState({value, copied: false})} />

        <CopyToClipboard text={state.value}
          onCopy={() => setState({copied: true})}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>

        <CopyToClipboard text={state.value}
          onCopy={() => setState({copied: true})}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>

        {state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    </>
  );
};

export default TextOutput;
