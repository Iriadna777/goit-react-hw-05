import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './GoBackButton.module.css';

const GoBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(location.state?.from ?? '/', { replace: true });
  };

  return (
    <button onClick={handleGoBack} className={styles.goBackButton}>
      &larr; Go back
    </button>
  );
};

export default GoBackButton;
