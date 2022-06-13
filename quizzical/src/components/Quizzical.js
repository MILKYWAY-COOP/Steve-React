import React from 'react';
import styles from './styles/quizzical.module.css'

export default function Quizzical() {
    return (
      <div className={styles.quizzical}>
        <div className={styles.topRight}></div>
        <h1 className={styles.h1}>Quizzical</h1>
        <h4 className="h4">Come have fun</h4>
        <button className="button">Start Quiz</button>
      </div>
    );
}