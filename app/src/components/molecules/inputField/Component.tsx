
import Button from "@/components/atoms/button/Component";
import Styles from "./Style.module.css";

export default function inputField() {
    return (
        <div className={Styles.container}>
            <label className={Styles.wrapper}>
                E-mail 
                <div className={Styles.form}>
                    <input className={Styles.field} type="email" name="myInput" placeholder="naam@domeinnaam.nl" required/>
                    <Button type="secondary">Sign up</Button>
                </div>
            </label>
        </div>
    );
  }