
import React from "react";
import styles from "./footer.module.css";
import UtilityLink from "../UtilityLink";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li>
            <UtilityLink href="mailto:ars.yar24@gmail.com">Email</UtilityLink>
          </li>
          <li>
            <UtilityLink href="https://www.instagram.com/ozzy.mnt/">
              Instagram
            </UtilityLink>
          </li>
        </ul>
        <span>Artisan Crafter based in Kolomyya</span>
        <ul className={styles.list}>
          <li>Cookies</li>
          <li>©2024</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
