import Image from "next/image";
import React from "react";
import {
  navBar,
  topShape,
  bottomShape,
  imageWraper,
  imageContainer,
  hoverDetails,
} from "./NavBar.module.css";
import HomeImg from "../../public/images/navImages/Home.png";
import ProjectsImg from "../../public/images/navImages/Projects.png";
import CodeImg from "../../public/images/navImages/code.png";
import ContactImg from "../../public/images/navImages/contact.png";
import postImage from "../../public/images/navImages/postImage.png";
import dashBoard from "../../public/images/navImages/dashBoard.png";
import projectAdd from "../../public/images/navImages/projectsAdd.png";

import Link from "next/link";

const NavBar = ({ owner }) => {
  return (
    <div className={navBar}>
      <div className={topShape}>
        <svg
          width="47"
          height="32"
          viewBox="0 0 47 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M46.5 32H0V0C0 19.5 14.5 30 46.5 32Z" fill="white" />
        </svg>
      </div>
      <div className={bottomShape}>
        <svg
          width="47"
          height="32"
          viewBox="0 0 47 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M46.5 0H0V32C0 12.5 14.5 2 46.5 0Z" fill="white" />
        </svg>
      </div>
      {!owner ? (
        <>
          <Link passHref href={"/"}>
            <div className={imageContainer}>
              <div className={hoverDetails}>Home</div>
              <div className={imageWraper}>
                <Image layout="fill" objectFit="cover" src={HomeImg} alt="" />
              </div>
            </div>
          </Link>
          <Link passHref href={"/projects"}>
            <div className={imageContainer}>
              <div className={hoverDetails}>Projects</div>
              <div className={imageWraper}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={ProjectsImg}
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link passHref href={"/library"}>
            <div className={imageContainer}>
              <div className={hoverDetails}>Library</div>
              <div className={imageWraper}>
                <Image layout="fill" objectFit="cover" src={CodeImg} alt="" />
              </div>
            </div>
          </Link>
          <Link passHref href={"/contact"}>
            <div className={imageContainer}>
              <div className={hoverDetails}>Contact</div>
              <div className={imageWraper}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={ContactImg}
                  alt=""
                />
              </div>
            </div>
          </Link>
        </>
      ) : (
        <>
          <Link passHref href={"/"}>
            <div className={imageContainer}>
              <div className={hoverDetails}>Home</div>
              <div className={imageWraper}>
                <Image layout="fill" objectFit="cover" src={HomeImg} alt="" />
              </div>
            </div>
          </Link>
          <Link passHref href={"/owner/addprojects/"}>
            <div className={imageContainer}>
              <div className={hoverDetails}>add Project</div>
              <div className={imageWraper}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={projectAdd}
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link passHref href={"/owner/is/manshad"}>
            <div className={imageContainer}>
              <div className={hoverDetails}>post</div>
              <div className={imageWraper}>
                <Image layout="fill" objectFit="cover" src={postImage} alt="" />
              </div>
            </div>
          </Link>
          <Link passHref href={"/owner/dashboard/"}>
            <div className={imageContainer}>
              <div className={hoverDetails}>Dashboard</div>
              <div className={imageWraper}>
                <Image layout="fill" objectFit="cover" src={dashBoard} alt="" />
              </div>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
