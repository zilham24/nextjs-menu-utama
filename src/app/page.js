import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.fadeInUpAnimation}`}>
      <Link href="/about">
          <img src="logocoderchamps.png" alt="Coder Champs Logo" className={styles.logo} />
        </Link>
        <nav className={styles.nav}>
          <Link href="/" rel="page.js">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/course">Course</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <div className={styles.authButtons}>
          <button className={`${styles.signInButton} ${styles.fadeInUpAnimation}`}>Sign in</button>
          <Link href="/login" passHref>
            <button className={`${styles.signUpButton} ${styles.fadeInUpAnimation}`}>Sign up</button>
          </Link>
        </div>
      </header>

      <div className={styles.mainContent}>
        <main className={`${styles.main} ${styles.fadeInUpAnimation}`}>
          <div className={styles.content}>
            <h1 className={styles.fadeInUpAnimation}>The best choice to start your future career.</h1>
            <p className={styles.fadeInUpAnimation}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link href="/course" passHref>
              <button className={`${styles.checkNowButton} ${styles.fadeInUpAnimation}`}>
                Check Now
              </button>
            </Link>
          </div>
          <div className={`${styles.imageContainer} ${styles.fadeInUpAnimation}`}>
            <img
              src="gambarutama.png"
              alt="Person holding a notebook"
              className={styles.personImage}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
