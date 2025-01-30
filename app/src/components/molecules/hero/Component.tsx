'use client';

import Styles from "./Style.module.css";
import BnbLogo from "images/b&b-logo.svg";

export default function Hero() {
  return (
    <div className={Styles.hero}>
        <div className={Styles['logo-wrapper']}>
          <BnbLogo className={Styles.logo}/>
        </div>
    </div>
  );
}
