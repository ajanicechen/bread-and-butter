import Styles from "./Style.module.css";

interface Props {
    name: string,
    role: string,
    company: string,
    children: string,
}
export default function Quote(props: Props) {
    return (
        <div className={Styles.wrapper}>
            <span className={Styles['quote-mark']}>“</span>
            <div className={Styles['block-quote']}>
                <blockquote className={Styles.quote}>
                    <p>{props.children}</p>
                </blockquote>
                <p className={Styles.credentials}>{props.name}, {props.role} at {props.company}</p>
            </div>
        </div>
    );
}