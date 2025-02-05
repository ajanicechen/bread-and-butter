import Sticker from "@/components/atoms/sticker/Component";
import InputField from "../inputField/Component";
import Styles from "./Style.module.css";

export default function Footer() {
    return (
        <div className={Styles.wrapper}>

            <div className={Styles.footer}>
                <h1>Join our next events</h1>
                <p>Do you want to join our next Bread & Butter event? Leave your email and we’ll keep you up to date.</p>
                <InputField />
                <span className={Styles['sticker-wrapper']}>
                    <Sticker />
                </span>
            </div>
            <ul className={Styles.contact}>
                <li className={Styles['contact-item']}>
                    <a href="mailto:info@voorbeeld.com" aria-label="Stuur een e-mail naar Just Agency">
                        hello@just.agency
                    </a>
                </li>
                <li className={Styles['contact-item']} >
                    <a href="tel:+1234567890" aria-label="Bel Just Agency">+31 (0)88 587 8000</a>
                </li>
            </ul>

        </div>
    )
}