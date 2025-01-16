import styles from "./Style.module.css"
interface Props {
    children?: string
    type: "primary" | "secondary"
}

export default function Button(props: Props) {
    const styleCheck = props.type === 'secondary' ? styles.secondary : styles.primary

    return (
        <a className={styleCheck}>{props.children}</a>
    );
  }