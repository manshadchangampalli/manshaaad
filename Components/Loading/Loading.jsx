import Image from "next/image";
import React from "react";
import LdnImg from "../../public/loading/ldg.gif";
import style from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={style.loadingpage}>
      <div className={style.imgContainer}>
        <Image src={LdnImg} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Loading;
