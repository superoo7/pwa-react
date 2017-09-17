import React from 'react'
import styles from './Header.css'

const Header = () => (
  <header className={styles.header} >
    <div className={styles.container}>
      <h1 className={styles.title}>superoo7</h1>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href='#' className={styles.link}>Posts</a>
          </li>
          <li className={styles.listItem}>
            <a href='#' className={styles.link}>About</a>
          </li>
          <li className={styles.listItem}>
            <a href='#' className={styles.link}>Resume</a>
          </li>
          <li className={styles.listItem}>
            <a href='#' className={styles.link}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
