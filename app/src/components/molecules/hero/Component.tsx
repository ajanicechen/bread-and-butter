'use client';

import Styles from "./Style.module.css";
import BnbLogo from "images/b&b-logo.svg";

export default function Hero() {
  
  let test = document.body.classList
 
  console.log(BnbLogo);
  return (
    <div className={Styles.hero}>
        <div className={Styles['logo-wrapper']}>
          <BnbLogo className={Styles.logo}/>
        {/* <img className={Styles.logo} src='/images/b&b-white.svg' alt="bread and butter logo" /> */}
        </div>
    </div>
  );
}
