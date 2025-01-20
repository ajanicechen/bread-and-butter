import Styles from "./Style.module.css";

export default function Hero() {
  return (
    <div className={Styles.hero}>
        <div className={Styles['logo-wrapper']}>
          <img className={Styles.logo} src="/images/b&b-white.svg" alt="bread and butter logo" />
        </div>
    </div>
  );
}
