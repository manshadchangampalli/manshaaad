import React from 'react'
import { Controlled } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/ayu-dark.css";
import {editor} from '../../styles/CodeEditor.module.css'
if (typeof navigator !== "undefined") {
    require("codemirror/mode/xml/xml");
    require("codemirror/mode/css/css")
    require("codemirror/mode/javascript/javascript");

}

const Editor = (props) => {
    const codemirrorRef = React.useRef();
    React.useEffect(() => {
        const current = codemirrorRef.current.editor.display.wrapper.style.height = "100%";
    });
    function handleChange(editor, data, value) {
        onChange(value);
    }
  const {
      onChange,
      value,
      language
  } = props
  return (
    <div style={{overflow:"hidden"}}>
        <Controlled
        onBeforeChange={handleChange}
        // similar onChange
        value={value}
        className={editor}
        ref={codemirrorRef}
        options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: "ayu-dark"
        }}
        />
    </div>
  )
}

export default Editor