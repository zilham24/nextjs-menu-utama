// page.js
import React from 'react';
import Link from 'next/link';
import styles from './contact.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Header */}
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

      {/* Contact Section */}
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactTitle}>Contact Information</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.6014762050734!2d110.4041973153411!3d-7.025253594933509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c6b150e0cbb%3A0xdfb8d88c7ae312f1!2sJl.%20Mampang%20Prapatan%20Raya%20No.71A%2C%20Tegal%20Parang%2C%20Kec.%20Mampang%20Prapatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1637553448697!5m2!1sid!2sid"
            width="100%"
            height="250"
            className={styles.map}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className={styles.contactDetail}>
            <img src="logophone.png" alt="Email Icon" className={styles.icon} />
            <p className={styles.email}>tanpaberatmendakiindonesia@gmail.com</p>
          </div>
          <div className={styles.contactDetail}>
            <img src="logoemail.png" alt="Email" className={styles.icon} />
            <p className={styles.phone}>08xxxxxx00xx</p>
          </div>
          <div className={styles.contactDetail}>
            <img src="logolokasi.png" alt="lokasi" className={styles.icon} />
            <p className={styles.address}>
              Jl Mampang Prapatan Raya No. 71A, Kelurahan Tegal Parang, Kecamatan Mampang Prapatan, Jakarta Selatan
            </p>
          </div>
          <div className={styles.socialIcons}>
            <a href="#"><img src="logoig.png" alt="Instagram" /></a>
            <a href="#"><img src="logolinkdin.png" alt="Linkdin" /></a>
            <a href="#"><img src="logox.png" alt="Twitter" /></a>
          </div>
        </div>
        <div className={styles.contactForm}>
          <h2>Get In Touch</h2>
          <p className={styles.introText}>We are here for you! How can we help you?</p>
          <form>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input id="name" type="text" className={styles.inputField} required />
            
            <label htmlFor="email" className={styles.label}>Email</label>
            <input id="email" type="email" className={styles.inputField} required />
            
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" className={styles.textArea} required></textarea>
            
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
