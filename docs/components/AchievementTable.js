import React from 'react';
import styles from './AchievementTable.module.css';

export const AchievementRow = ({ rank, description, year }) => {
  return (
    <div className={styles.achievementRow}>
      <div className={styles.rank}>{rank}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.year}>{year}</div>
    </div>
  );
};