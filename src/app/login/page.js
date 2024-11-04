import Link from 'next/link';
import styles from './login.module.css';

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/logocoderchamps.png" alt="CoderChamps Logo" className={styles.logoImage} />
                    </Link>
                    <p className={styles.title}>Welcome to <span className={styles.brand}>CoderChamps</span></p>
                </div>
                <form className={styles.form}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input type="text" id="name" className={styles.input} />

                    <label className={styles.label} htmlFor="password">Password</label>
                    <input type="password" id="password" className={styles.input} />

                    <div className={styles.links}>
                        <a href="#" className={styles.link}>Create Account</a>
                        <a href="#" className={styles.link}>Forgot the password?</a>
                    </div>

                    {/* Menjadikan tombol Sign up sebagai Link */}
                    <Link href="/login">
                        <button type="button" className={styles.signUpButton}>Sign up</button>
                    </Link>
                </form>
                <div className={styles.orContainer}>
                    <span className={styles.or}>or</span>
                </div>
                <div className={styles.socialButtons}>
                    <button className={styles.socialButton}><img src="/facebook.png" alt="Facebook" /></button>
                    <button className={styles.socialButton}><img src="/google.png" alt="Google" /></button>
                    <button className={styles.socialButton}><img src="/x.png" alt="Twitter" /></button>
                </div>
            </div>
        </div>
    );
} 
