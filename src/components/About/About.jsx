import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export default function About() {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage}  src={getImageUrl("about/aboutImage.png")} alt='Me sitting with laptop'/>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl('about/cursorIcon.png')} alt='cursor' />
          <div className={styles.aboutItemText}>
            <h2>FrontEnd developer</h2>
            <p>Passionate Front End Developer with a knack for crafting engaging user interfaces and seamless user experiences. Proficient in HTML5, CSS3, and JavaScript</p>
           </div>
        </li>
        <li className={styles.aboutItem} >
          <img src={getImageUrl('about/serverIcon.png')} alt='cursor' />
          <div className={styles.aboutItemText}>
            <h2>Backend developer</h2>
            <p>Dedicated Backend Developer specializing in Node.js and MongoDB with a focus on building scalable and efficient server-side solutions. With a solid understanding of RESTful API development and database management, I thrive on architecting robust back-end systems that power dynamic web applications.</p>
          </div>
        </li>
        
      </ul>
      </div>
    </section>
  )
}
