import React from 'react';
import Link from '@docusaurus/Link';
import styles from './PostCard.module.css';

export default function ProjectCard({ title, description, link }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}>Read More →</Link>
    </div>
  );
}