import styles from "./page.module.css";
import InputField from "@/components/molecules/inputField/Component";
import Quote from "@/components/molecules/quote/Component";
import Hero from "@/components/molecules/hero/Component";
import Footer from "@/components/molecules/footer/Component";
import Navbar from "@/components/molecules/navbar/Component";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles['nav-wrapper']}>
        <Navbar/>
      </nav>
      <header className={styles.hero}>
        <div>
          <Hero />  
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.introduction}>
          <h1>
            The future of <span className={`${styles.highlight} ${styles.accent}`}>Accessibility</span>
          </h1>
          <div>
            <p>On November 28, we hosted our first Bread & Butter event—a moment to share insights and connect with clients.</p>
            <p>This edition focused on “The Future of Accessibility”, featuring a workshop by the inspiring <span className={`${styles.highlight} ${styles.underline}`}>Fresco Sam-Sin</span> and a talk from Tizian Fendt, UX Designer at JUST.</p>
          </div>
        </section>

        <section className={styles.section}>
          <div>          
            <p>Together, we explored innovative ideas and actionable strategies to make accessibility a priority in today’s ever-evolving world.</p>
            <p>Stay tuned for our next Bread & Butter event, where we’ll continue fostering meaningful conversations and empowering our community with knowledge.</p>
          </div>
          <div>
            <h2>Why accessiblity matters</h2>
            <p>Accessibility matters because 1.3 billion people worldwide, including 2 million in the Netherlands, experience significant disabilities, and over half of Dutch smartphone users rely on accessibility settings to navigate their devices.</p>
          </div>
        </section>
        
        <Quote name='Tizian Fendt' role='UX designer' company="JUST">Digital Accessibility improves the experience for all users, not just those with disabilities.</Quote>
        
        <section>
          <h2>Why we need a mindset shift</h2>
          <div className={styles['p-spacing']}>
            <p>Neglecting to prioritize accessibility not only excludes a significant portion of your audience but also means missing out on a range of advantages that can greatly enhance your digital presence. Accessible design leads to a better overall user experience for everyone, as it ensures your website is intuitive and easy to navigate. </p>
            <p>It also often results in faster loading times, as accessibility improvements typically streamline functionality and optimize performance. </p>
            <p>Additionally, websites that prioritize accessibility tend to rank higher on Google, as search engines reward sites with better usability and structure. This improved SEO translates to greater visibility, helping you reach more potential customers. </p>
            <p>Ultimately, by embracing accessibility, you not only foster inclusivity but also enjoy higher conversion rates, as more users can engage seamlessly with your content or services.</p>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
