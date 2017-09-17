import React from 'react'
import styles from './Header.css'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className={styles.header} >
    <div className={styles.container}>
      <h1 className={styles.title}>superoo7</h1>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link to='/' className={styles.link}>Posts</Link>
          </li>
          <li className={styles.listItem}>
            <Link to='/about' className={styles.link}>About</Link>
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
