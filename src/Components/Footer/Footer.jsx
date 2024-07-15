import React from 'react';
import styles from './Footer.module.css'; // Assuming you have a CSS module for styling

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Find me on social media</p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/Igimbayeva?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src="/github_logo.jpg" alt="Github Logo" className={styles.logo} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/dinara-igimbayeva-b45702126/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.jpg" alt="LinkedIn Logo" className={styles.logo} />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
