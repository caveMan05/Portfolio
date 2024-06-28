import React from 'react'
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import {getImageUrl} from "../../utils"
import styles from "./Experience.module.css"

export default function Experience() {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill,index)=>{
            return(
              <div className={styles.skill} key={index}>
                <div className={styles.skillImageContainer} >
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                </div>
                <p>{skill.title}</p>
              </div>

            )
          }
          )}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem,index)=>{
            return(
              <li key={index} className={styles.historyItem}>
                <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} logo`}/>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate},${historyItem.endDate}`}</p>
                  <ul>{historyItem.experience.map((exp,index)=>{
                    return(
                      <li key={index}>
                        {exp}
                      </li>
                    )
                  })}</ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
