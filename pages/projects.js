import React, { useState, useEffect } from "react";
import Logo from "../Components/logo/Logo";
import NavBar from "../Components/navbar/NavBar";
import styles from "../styles/Projects.module.css";
import arrowImg from "../public/images/navImages/Arrow.png";
import Image from "next/image";
import Img1 from "../public/images/img1.png";
import Img2 from "../public/images/img2.png";
import ResponsiveNav from "../Components/navbar/ResponsiveNav";


export const getServerSideProps = async() => {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}projects`)
    const data = await response.json()
    return{
      props:{
        projectData:data
      }
    }
  }catch(err){
    console.log(err);
    return{
      props:{
        projectData:[]
      }
    }
  }
}

const Projects = ({projectData}) => {
  // how many projects
  const [translate, setTranslate] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const [translateAmount, setTranslateAmount] = useState(400);
  const [last,setLast] = useState(0)
  // how long we can translate
  // the starting always zero
  console.log("last"+ last);
  console.log("amount"+translateAmount);
  const first = 0;
  // the next button clicked
  useEffect(()=>{
    console.log("useEffect");
      setInnerWidth(window.innerWidth)
      console.log(window.innerWidth,"innerwidht");
    if(window.innerWidth < 768){
      setTranslateAmount((((window.innerWidth/100)*96 ) / 6) * 4)
    }
    setLast((projectData.length -1) *-translateAmount)
  },[translate,innerWidth])
  console.log(innerWidth,translateAmount);
  
  const nextButtonClicked = () => {
    if (translate !== last) {
    console.log("project data",translateAmount);
      setTranslate(translate - translateAmount);
    }
  };
  // the prev button clicked
  const prevButtonClicked = () => {
    if (translate !== first) {
      setTranslate(translate + translateAmount);
    }
  };


  return (
    <div className={styles.projectsPage}>
      <NavBar />
      <ResponsiveNav/>
      <Logo />
      <div className={styles.projectswraper}>
        {translate !== first && (
          <div onClick={prevButtonClicked} className={styles.prevButton}>
            <Image alt="" src={arrowImg} />
          </div>
        )}
        {translate !== last && (
          <div onClick={nextButtonClicked} className={styles.nextButton}>
            <Image alt="" src={arrowImg} />
          </div>
        )}
        <div className={styles.projects}>
          <div
            style={{ transform: `translateY(${translate}px)` }}
            className={styles.allProjects}
          >
            {projectData.length>0 &&
            projectData.map((data,i) => (
              <div key={i} className={styles.imageWraper}>
                <Image layout="fill" src={data.image ? data.image : "/"} alt=""  objectFit="cover" />
                <div className={styles.imagedetails}>
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  <a href={data.link}>show</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
