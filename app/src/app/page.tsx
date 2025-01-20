import Image from "next/image";
import styles from "./page.module.css";
import InputField from "@/components/molecules/inputField/Component";
import Quote from "@/components/molecules/quote/Component";
import Hero from "@/components/molecules/hero/Component";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Hero/>
      </div>
      <main className={styles.main}>
        <Quote name="Tizian Fendt" role="UX designer" company="JUST">Digital Accessibility improves the experience for all users, not just those with disabilities.</Quote>
        <h2>Why we need a minset shift</h2>
        <div>
          <p>Neglecting to prioritize accessibility not only excludes a significant portion of your audience but also means missing out on a range of advantages that can greatly enhance your digital presence. Accessible design leads to a better overall user experience for everyone, as it ensures your website is intuitive and easy to navigate. </p>
          <p>It also often results in faster loading times, as accessibility improvements typically streamline functionality and optimize performance. </p>
          <p>Additionally, websites that prioritize accessibility tend to rank higher on Google, as search engines reward sites with better usability and structure. This improved SEO translates to greater visibility, helping you reach more potential customers. </p>
          <p>Ultimately, by embracing accessibility, you not only foster inclusivity but also enjoy higher conversion rates, as more users can engage seamlessly with your content or services.</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <h1>Join our next events</h1>
        <p>Do you want to join our next Bread & Butter event? Leave your email and we’ll keep you up to date.</p>
        <InputField />
      </footer>
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
