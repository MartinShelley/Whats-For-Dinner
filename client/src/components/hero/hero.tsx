import { Sparkles } from "lucide-react";

import styles from './hero.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <h2 className={styles.heroTitle}>What's For Dinner tonight?</h2>
      <p className={styles.heroSubtitle}>Let us help you decide</p>
      <button className={styles.heroButton}>
        <Sparkles />
        Generate Ideas
      </button>
    </div>
  )
}

export { Hero };