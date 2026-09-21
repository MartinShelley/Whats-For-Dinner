import { Sparkles } from "lucide-react";

import styles from './hero.module.css';
import { Button } from "../button/button";

function Hero() {
  return (
    <div className={styles.hero}>
      <h2 className={styles.heroTitle}>What's For Dinner tonight?</h2>
      <p className={styles.heroSubtitle}>Let us help you decide</p>
      <Button className={styles.heroButton} variant="icon-rounded" iconVariant="accent" icon={Sparkles} onClick={() => { /* Add generate ideas logic */ }} aria-label="Generate Ideas">
        Generate Ideas
      </Button>
    </div>
  )
}

export { Hero };