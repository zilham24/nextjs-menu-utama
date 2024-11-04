import React from 'react';
import styles from './about.module.css';
import Link from 'next/link';

export default function aboutus() {
  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.fadeInUpAnimation}`}>
        <img src="logocoderchamps.png" alt="Coder Champs Logo" className={styles.logo} />
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/">Course</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <div className={styles.authButtons}>
          <button className={`${styles.signInButton} ${styles.fadeInUpAnimation}`}>Sign in</button>
          <button className={`${styles.signUpButton} ${styles.fadeInUpAnimation}`}>Sign up</button>
        </div>
      </header>

      <div className={styles.mainContent}>
        <main className={`${styles.main} ${styles.fadeInUpAnimation}`}>
          <div className={styles.content}>
            <h1> Hello <span className={styles.highlight}>Champions!</span> </h1>
            <h1> Welcome to <span className={styles.highlight}>CoderChamps!</span> We are an online learning platform </h1>
            <p className={styles.fadeInUpAnimation}>dedicated to helping beginners to master the latest programming and technology skills. At CoderChamps, we believe that everyone has the potential to become a tech expert, and we are committed to providing an easy, structured, and in-depth learning platform..</p>
          </div>
          <div className={`${styles.imageContainer} ${styles.fadeInUpAnimation}`}>
            <img
              src="fotosamping.png"
              alt="Person holding a notebook"
              className={styles.personImage}
            />
          </div>
        </main>
      </div>

      {/* Section "Our Mission" */}
      <div className={styles.missionContainer}>
        <h2 className={styles.heading}>
          Our <span className={styles.highlight}>Mission</span>!
        </h2>
        <p className={styles.description}>
          Our mission is to create a generation of skilled coders and technology developers who
          are ready to compete in the digital world. With a variety of courses designed by
          industry experts, we ensure that every lesson material is always relevant to the latest
          developments in the world of technology.
        </p>
      </div>
    </div>
  );
}
