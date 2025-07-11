import React, { useEffect } from 'react';
import styles from './Modal.module.css';

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.modalContent}>
          <div className={styles.leftCol}>
            <img src="/images/sky.png" alt="Skyscraper" className={styles.modalImage} />
          </div>
          <div className={styles.rightCol}>
            <div className={styles.formRow}>{children}</div>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="X" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 