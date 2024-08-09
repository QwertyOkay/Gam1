import React, { useState } from 'react';
import Modal from './Modal';
import styles from './SubscriptionForm.module.css';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsModalOpen(true);
      setEmail('');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.subscriptionForm}>
      <h1>Pin Up Bültenimize Kayıt Olun</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email adresinizi girin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput}
          required
        />
        <button type="submit" className={styles.subscribeButton}>
          Abone Ol
        </button>
      </form>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Teşekkürler!</h2>
       Pin Up Bültenimize Kayıt Olun
      </Modal>
    </div>
  );
};

export default SubscriptionForm;
