import Styles from "./Style.module.css";
import JustLogo from "images/just-logo.svg"

export default function Navbar() {
    return (
        <div className={Styles.navbar}>
            <a href='https://just.agency/nl' target='_blank' className={Styles['logo-wrapper']}>
                <JustLogo className={Styles.logo} />
            </a>
        </div>
    );
}