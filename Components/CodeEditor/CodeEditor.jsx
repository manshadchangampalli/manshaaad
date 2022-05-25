import React from "react";
import { useState, useEffect } from "react";
import Editor from "../../Components/Editor/Editor";
import MousePointer from "../../Components/mousePointer/MousePointer";
import {
    codeEditorContainer,
    codeEditor,
    outputBoxs,
    inputBoxs,
    inputHeader,
    outputHeader,
    iframe,
    reserButton,
    runButton,
} from "../../styles/CodeEditor.module.css";

const CodeEditor = ({ srcDoc, setSrcDoc, owner, submitButtonClicked, data , html, setHtml, css, setCss, js, setJs }) => {

    const [selected, setSelected] = useState(1);

    useEffect(() => {
        setSrcDoc(
            `<html>
          <body>
            <style>
              ${css}
            </style>
              ${html}
            <script>
              ${js}
            </script>
          </body>
        </html>`
        );
    }, []);
    const runButtonClicked = () => {
        setSrcDoc(
            `<html>
          <body>
            <style>
              ${css}
            </style>
              ${html}
            <script>
              ${js}
            </script>
          </body>
        </html>`
        );
    };
    const resetButtonClicked = () => {
        setHtml("")
        setCss("")
        setJs("")
        runButtonClicked()
    }
    return (
        <div className={codeEditor}>
            <div className={inputBoxs}>
                <div className={inputHeader}>
                    <p
                        onClick={() => setSelected(1)}
                        style={{
                            background: selected === 1 ? "white" : "black",
                            color: selected === 1 ? "black" : "white",
                        }}
                    >
                        HTML
                    </p>
                    <p
                        onClick={() => setSelected(2)}
                        style={{
                            background: selected === 2 ? "white" : "black",
                            color: selected === 2 ? "black" : "white",
                        }}
                    >
                        CSS
                    </p>
                    <p
                        onClick={() => setSelected(3)}
                        style={{
                            background: selected === 3 ? "white" : "black",
                            color: selected === 3 ? "black" : "white",
                        }}
                    >
                        JAVASCRIPT
                    </p>
                </div>
                {selected === 1 && (
                    <Editor onChange={setHtml} value={html} language="xml" />
                )}
                {selected === 2 && (
                    <Editor onChange={setCss} value={css} language="css" />
                )}
                {selected === 3 && (
                    <Editor onChange={setJs} value={js} language="javascript" />
                )}
            </div>
            <div className={outputBoxs}>
                <div className={outputHeader}>
                    <p>Output</p>
                    <div>
                        <p onClick={resetButtonClicked} className={reserButton}>Reset</p>
                        <p onClick={runButtonClicked} className={runButton}>
                            Run
                        </p>
                        {
                            owner &&
                            <p onClick={() => submitButtonClicked(html, css, js)} className={runButton}>
                                submit
                            </p>
                        }
                    </div>
                </div>
                <iframe
                    className={iframe}
                    sandbox="allow-popups allow-scripts"
                    srcDoc={srcDoc}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                />
            </div>
        </div>
    );
};

export default CodeEditor;
