import React, { useState, useEffect } from 'react';

const Notification = ({ message, type }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000); // Exibe a notificação por 3 segundos (ajuste conforme necessário)
    }
  }, [message]);

  return (
    <div className={`notification ${show ? 'show' : ''} ${type === 'success' ? 'success' : ''}`}>
      {alert(message)}
    </div>
  );
};

export default Notification;
