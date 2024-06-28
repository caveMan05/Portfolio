import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/email.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">itsmespandey18@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/phone.png")}
            alt="LinkedIn icon"
          />
          <a >+91-9821636426</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          <a href="https://www.github.com/caveMan05">github.com/caveMan05</a>
        </li>
      </ul>
    </footer>
  );
};