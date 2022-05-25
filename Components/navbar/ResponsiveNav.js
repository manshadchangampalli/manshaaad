import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  responsiveNav,
  imageContainer,
  imageWraper,
} from "./ResponsiveNav.module.css";

const ResponsiveNav = () => {
  return (
    <div className={responsiveNav}>
      <Link passHref href={"/"}>
        <div className={imageContainer}>
          <Image
            layout="fill"
            objectFit="cover"
            src={"/images/navImages/Home.png"}
            alt=""
          />
        </div>
      </Link>
      <Link passHref href={"/projects"}>
        <div className={imageContainer}>
          <Image
            layout="fill"
            objectFit="cover"
            src={"/images/navImages/Projects.png"}
            alt=""
          />
        </div>
      </Link>
      <Link passHref href={"/library"}>
        <div className={imageContainer}>
          <Image
            layout="fill"
            objectFit="cover"
            src={"/images/navImages/code.png"}
            alt=""
          />
        </div>
      </Link>
      <Link passHref href={"/contact"}>
        <div className={imageContainer}>
          <Image
            layout="fill"
            objectFit="cover"
            src={"/images/navImages/contact.png"}
            alt=""
          />
        </div>
      </Link>
      <Link passHref href={"/contact"}>
        <div className={imageContainer}>
          <Image
            layout="fill"
            objectFit="cover"
            src={"/images/icons/username.png"}
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default ResponsiveNav;
