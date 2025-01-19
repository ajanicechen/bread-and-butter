import Image from "next/image";
import styles from "./page.module.css";
import InputField from "@/components/molecules/inputField/Component";
import Quote from "@/components/molecules/quote/Component";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
      <div className={styles['logo-wrapper']}>
          <img className={styles.logo} src="/images/b&b-white.svg" alt="bread and butter logo" />
        </div>
      </header>
      {/* <main className={styles.main}>
        <h1>Help</h1>
        <Quote name="Tizian Fendt" role="UX designer" company="JUST">Digital Accessibility improves the experience for all users, not just those with disabilities.</Quote>
        <InputField />
      </main> */}
      {/* <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
