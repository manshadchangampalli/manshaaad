import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";
const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
  );

const Editor = (props) => {
    //     const [render, setRender] = useState(false);

    //    useEffect(() => {
    //       setRender(true);
    //    }, []);
    // const codemirrorRef = React.useRef();
    // React.useEffect(() => {
    //     const current = codemirrorRef.current.editor.display.wrapper.style.height = "100%";
    // },[]);
    function handleChange(e) {
        onChange(e.target.value);
    }
    const {
        onChange,
        value,
        language
    } = props
    return (
        <div style={{ overflow: "hidden" }}>
            {/* <Controlled
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
        /> */}
            <CodeEditor
                value={value}
                language={language}
                placeholder={`Please enter ${language === 'xml'?"Html5":language} code`}
                onChange={(evn) =>handleChange(evn)}
                padding={15}
                style={{
                    fontSize: 12,
                    color:"white",
                    backgroundColor: "#000000",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
            />
        </div>
    )
}

export default Editor