'use client';

import Sticker from "@/components/atoms/sticker/Component";
import Styles from "./Style.module.css";
import BnbLogo from "images/b&b-logo.svg";

export default function Hero() {
  return (
    <div className={Styles.hero}>
      <span className={Styles['sticker-wrapper']}>
        <Sticker />
      </span>
      <div className={Styles['logo-wrapper']}>
        <BnbLogo className={Styles.logo} />
      </div>
    </div>
  );
}
