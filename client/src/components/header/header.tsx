import { Search, Bell } from "lucide-react";

import styles from './header.module.css';

function Header() {
  const hasNotification = true;
  return (
    <header>
      <div className={styles.navLeft}>
        <img src="/assets/logo-no-background.svg" height={48}/>

        <div className="nav-greeting">
          <p>Good Evening, </p>
          <h3>Martin!</h3>
        </div>
      </div>

      <div className={styles.navRight}>
        <button className={styles.navButton}>
          <Search color="#4A5565" />
        </button>
        <button className={styles.navButton} aria-label="Notifications">
          <Bell color="#4A5565" />
          { hasNotification && <span className={styles.badge} /> }
        </button>
      </div>
    </header>
  );
}

export { Header };