import React, { useState, useEffect } from "react";
import NavBar from "../../Components/navbar/NavBar";
import CodeEditor from "../../Components/CodeEditor/CodeEditor";
import ResposiveCodeEditor from "../../Components/CodeEditor/ResposiveCodeEditor";
import { codeEditorContainer } from "../../styles/CodeEditor.module.css";
import ResponsiveNav from "../../Components/navbar/ResponsiveNav";

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}library/getbyid?id=${id}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

const CodeEditors = ({ data }) => {
  const [srcDoc, setSrcDoc] = useState("");
  const [html, setHtml] = useState(data[0].html)
  const [css, setCss] = useState(data[0].css);
  const [js, setJs] = useState(data[0].js);
  console.log(data);
  return (
    <div className={codeEditorContainer}>
      <ResponsiveNav/>
      <NavBar />
      <ResposiveCodeEditor
      html={html}
      setHtml={setHtml}
      setCss={setCss}
      css={css}
      js={js}
      setJs={setJs}
      srcDoc={srcDoc}
      data={data}
      setSrcDoc={setSrcDoc}
      />
      <CodeEditor
        html={html}
        setHtml={setHtml}
        setCss={setCss}
        css={css}
        js={js}
        setJs={setJs}
        srcDoc={srcDoc}
        data={data}
        setSrcDoc={setSrcDoc}
      />
    </div>
  );
};

export default CodeEditors;
