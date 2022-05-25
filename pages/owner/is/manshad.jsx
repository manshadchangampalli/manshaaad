import { useRouter } from 'next/router'
import React from 'react'
import NavBar from '../../../Components/navbar/NavBar'
import CodeEditor from '../../../Components/CodeEditor/CodeEditor'
import style from './manshad.module.css'
import { useState } from 'react'
import Library from '../../library'

const Manshad = () => {
  const [checkName, setCheckName] = useState("")
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [libraryAddedStatus, setLibraryAddedStatus] = useState("")
  const [popup, setPopup] = useState(false)
  const [projName, setProjName] = useState("")
  const [srcDoc, setSrcDoc] = useState("");
  const [code, setCode] = useState({
    html: "",
    css: "",
    js: ""
  })
  const router = useRouter();

  const resetCodeAndName = () => {
    setCode({
      html: "",
      css: "",
      js: ""
    })
    setProjName("")
  }

  const handleData = () => {
    setCheckName("")
    const data = {
      html: code.html,
      css: code.css,
      js: code.js,
      name: projName
    }
    if ((code.html === "" && code.css === "" && code.js === "") || projName === "") {
      if (projName === "") {
        setCheckName("*The Project name is missing")
      }
      return
    }

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}library/addlibrary`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.status === 200) {
          setLibraryAddedStatus("Code added to the Library")
          setTimeout(() => {
            setPopup(false)
            setLibraryAddedStatus("")
            resetCodeAndName()
          }, 3000)
        }
      })
      .catch(err => {
        console.log(error);
        setLibraryAddedStatus("code not added!!")
      })
  }

  const submitButtonClicked = (html, css, js) => {
    setCheckName("")
    if (html === "" && css === "" && js === "") {
      setSrcDoc(
        `<html>
        <style>
        *{
          margin:0;
          padding;0;
          text-align:center;
        }
          body{
            overflow:hidden;
            display:grid;
            place-content:center;
            height:100vh;
            width:100vw;
            color:red;
          }
          img{
            width:200px;
            height:auto;
          }
        </style>
      <body>
        <img src="https://i.pinimg.com/originals/48/fb/90/48fb90bcf2a1f779ee66deee8a12c898.png"/>
        <h1>oops !!</h1>
        <h2> there is no code </h2>
        <p>(html, css and js are empty)</p>
      </body>
    </html>`)
      return
    }
    setSrcDoc("")
    setCode({
      html: html,
      css: css,
      js: js
    })
    setPopup(!popup)
  }
  return (
    <div className={style.postPage}>
      {
        popup &&
        <div className={style.popupForLibraryName}>
          <div className={style.popupContainer}>
            <svg onClick={() => setPopup(!popup)} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L12.3137 12.3137" stroke="white" />
              <path d="M12.1569 0.843262L0.843152 12.157" stroke="white" />
            </svg>
            <form >
              <p style={{ color: "red" }}>{checkName}</p>
              {
                libraryAddedStatus !== "" && <p
                  style={{ color: libraryAddedStatus === "code not added!!" ? "red" : "green" }}>
                  {libraryAddedStatus}
                </p>
              }
              <input value={projName} type="text" onChange={(e) => {
                setProjName(e.target.value)
              }} />
              <button onClick={handleData} type='button'>confirm</button>
            </form>
          </div>
        </div>
      }
      <NavBar owner />
      <CodeEditor html={html} setHtml={setHtml} setCss={setCss} css={css} js={js} setJs={setJs} setSrcDoc={setSrcDoc} srcDoc={srcDoc} owner submitButtonClicked={submitButtonClicked} />
    </div>
  )
}

export default Manshad