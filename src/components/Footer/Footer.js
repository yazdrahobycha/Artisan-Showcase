import React from "react";
import styles from  './footer.module.css'

function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li>
            <a href="mailto:ars.yar24@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://www.instagram.com/ozzy.mnt/"></a>Instagram
          </li>
        </ul>
        Artisan Crafter based in Kolomyya
        <ul className={styles.list}>
          <li>Cookies</li>
          <li>©2024</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
