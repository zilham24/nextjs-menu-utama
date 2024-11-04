// src/app/page.js
import React from 'react';
import styles from './kurses.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <header className={`${styles.header} ${styles.fadeInUpAnimation}`}>
        <img src="logocoderchamps.png" alt="Coder Champs Logo" className={styles.logo} />
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

      <PopularCourses />
    </div>
  );
}

function PopularCourses() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Popular Courses</h2>
      <div className={styles.cardsContainer}>
        {/* Row 1 */}
        <div className={styles.row}>
          <CourseCard
            imageSrc="laptop2.png"
            role="Fullstack Developer"
            courseTitle="Basic Html, Basic Css & Java Script"
            classes="24 Classes"
            videos="24 Video"
          />
          <CourseCard
            imageSrc="laptop2.png"
            role="Content Creator"
            courseTitle="Basics Of Becoming a Content Creator"
            classes="24 Classes"
            videos="24 Video"
          />
          <CourseCard
            imageSrc="laptop2.png"
            role="UI/UX Design"
            courseTitle="Basic Html, Basic Css & Java Script"
            classes="24 Classes"
            videos="24 Video"
          />
        </div>

        {/* Row 2 */}
        <div className={styles.row}>
          <CourseCard
            imageSrc="laptop2.png"
            role="Backend Developer"
            courseTitle="Introduction to Node.js"
            classes="24 Classes"
            videos="24 Video"
          />
          <CourseCard
            imageSrc="laptop2.png"
            role="Frontend Developer"
            courseTitle="Advanced CSS & Sass"
            classes="24 Classes"
            videos="24 Video"
          />
          <CourseCard
            imageSrc="laptop2.png"
            role="Data Analyst"
            courseTitle="Data Analysis with Python"
            classes="24 Classes"
            videos="24 Video"
          />
        </div>
      </div>
    </div>
  );
}

function CourseCard({ imageSrc, role, courseTitle, classes, videos }) {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={role} className={styles.cardImage} />
      <div className={styles.cardHeader}>
        <span className={styles.roleBadge}>{role}</span>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.courseTitle}>{courseTitle}</h3>
        <div className={styles.details}>
          <span>
            <img src="buku2.png" alt="Classes Icon" className={styles.icon} />
            {classes}
          </span>
          |
          <span>
            <img src="video2.png" alt="Video Icon" className={styles.icon} />
            {videos}
          </span>
        </div>
        <button className={styles.checkButton}>Check Now</button>
      </div>
    </div>
  );
}
