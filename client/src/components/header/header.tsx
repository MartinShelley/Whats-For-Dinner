import { Search, Bell } from "lucide-react";

import { Button } from "../button/button";

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
        <Button className={styles.navButton} variant="icon" icon={Search} iconVariant="subtle" onClick={() => { /* Add search logic */ }} aria-label="Search" />
        <Button className={styles.navButton} variant="icon" icon={Bell} iconVariant="subtle" onClick={() => { /* Add notification handling logic */ }} aria-label="Notifications" badge={hasNotification} />
      </div>
    </header>
  );
}

export { Header };