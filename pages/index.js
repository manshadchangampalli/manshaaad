import Head from "next/head";
import Image from "next/image";
import { useEffect,useState } from "react";
import BackgroundBox from "../Components/backgroundboxes/BackgroundBox";
import HelloText from "../Components/helloText/HelloText";
import Logo from "../Components/logo/Logo";
import MousePointer from "../Components/mousePointer/MousePointer";
import NavBar from "../Components/navbar/NavBar";
import ResponsiveNav from "../Components/navbar/ResponsiveNav";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [tour, setTour] = useState()
  useEffect(()=>{
    setTour(localStorage.getItem('tour'))
  })
  return (
    <div className={styles.homePage}>
      <ResponsiveNav/>
      <NavBar />
      <Logo />
      <BackgroundBox />
      <HelloText />
      <MousePointer />
    </div>
  );
}
