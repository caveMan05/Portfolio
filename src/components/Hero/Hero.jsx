import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi,I'm Shubham</h1>
          <p className={styles.description}>I'm a MERN-Stack developer, I'm passionate about crafting user-friendly web applications using modern technologies. Proficient in React.js, Node.js, and MongoDB, I'm eager to contribute to dynamic development teams and continue learning in the ever-evolving field of web development.</p>
          <a className={styles.contactBtn} href='#contact'>Contact me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt='hero image of me'/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}></div>
      </section>
    </>
  )
}
