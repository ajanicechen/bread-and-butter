import ThemeToggle from "@/components/atoms/themeToggle/Component";
import Styles from "./Style.module.css";
import JustLogo from "images/just-logo.svg"

export default function Navbar() {
    return (
        <div className={Styles.navbar}>
            <a href='https://just.agency/nl' target='_blank' className={Styles['logo-wrapper']} aria-label="Just agency">
                <JustLogo className={Styles.logo} />
            </a>
            <ThemeToggle />
        </div>
    );
}