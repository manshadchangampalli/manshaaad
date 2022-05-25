import React, { useEffect, useState } from 'react'
import Editor from '../Editor/Editor'
import style from './ResponsiveCodeEditor.module.css'

const ResposiveCodeEditor = ({ srcDoc, setSrcDoc, owner, submitButtonClicked, data, html, setHtml, css, setCss, js, setJs }) => {
    const [selectItem, setSelectItem] = useState(3)
    const [onChange, setOnchange] = useState("")
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
    }

    const navItems = [
        'html',
        'css',
        'js',
        'output',
    ]

    const editorItems = [
        {
            onChange: setHtml,
            value: html,
            language: "xml"
        },
        {
            onChange: setCss,
            value: css,
            language: "css"
        },
        {
            onChange: setJs,
            value: js,
            language: "javascript"
        },
    ]
    return (
        <div className={style.resCodeEditor}>
            <div className={style.navItems}>
                {
                    navItems.map((data, i) => (
                        <div
                            onClick={() => setSelectItem(i)}
                            style={{ color: selectItem === i && "black", background: selectItem === i && "white" }} className={style.navItem} key={i}>
                            {data}
                        </div>
                    ))
                }
                <div
                    onClick={runButtonClicked}
                    className={style.runButton}>
                    run
                </div>
            </div>
            <div className={style.editorContainer}>
                {
                    selectItem === 0 &&
                    <Editor onChange={setHtml} value={html} language="xml" />
                }
                {
                    selectItem === 1 &&
                    <Editor onChange={setCss} value={css} language="css" />
                }
                {
                    selectItem === 2 &&
                    <Editor onChange={setJs} value={js} language="javascript" />
                }
                {
                    selectItem === 3 &&
                    <iframe
                        className={style.iframe}
                        sandbox="allow-popups allow-scripts"
                        srcDoc={srcDoc}
                        width={"100vw"}
                        frameBorder="0"
                    />
                }
            </div>
        </div>
    )
}

export default ResposiveCodeEditor