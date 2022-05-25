import Image from "next/image";
import React from "react";
import Logo from "../Components/logo/Logo";
import NavBar from "../Components/navbar/NavBar";
import ResponsiveNav from "../Components/navbar/ResponsiveNav";
import style from "../styles/contact.module.css";

const contact = () => {
  return (
    <div className={style.contact}>
      <Image objectFit="cover" alt="bg" layout="fill" src={"/images/code bg/bg.webp"} />
      <Logo />
      <ResponsiveNav/>
      <NavBar />
      <div className={style.contactbox}>
        <div className={style.socilamediacontainer}>
          <a href="">
            <div>
              <Image
                src={"/images/icons/linkedin.png"}
                objectFit="cover"
                layout="fill"
                alt="img"
              />
            </div>
          </a>

          <a href="">
            <div>
              <Image
                src={"/images/icons/github.png"}
                objectFit="cover"
                layout="fill"
                alt="img"
              />
            </div>
          </a>
          <a href="">
            <div>
              <Image
                src={"/images/icons/behance.png"}
                objectFit="cover"
                layout="fill"
                alt="img"
              />
            </div>
          </a>
          <a href="">
            <div>
              <Image
                src={"/images/icons/instagram.png"}
                objectFit="cover"
                layout="fill"
                alt="img"
              />
            </div>
          </a>
        </div>
        <a href="">
          <div className={style.cvDownload}>
            <Image
              src={"/images/icons/cv.png"}
              objectFit="cover"
              layout="fill"
              alt="img"
            />
          </div>
        </a>
      </div>
      <ul>
        <li>
          <a href="">manshadchangampalli010@gmail.com</a>
        </li>
        <li>
          <a href="">+91 8086240259</a>
        </li>
      </ul>
    </div>
  );
};

export default contact;
