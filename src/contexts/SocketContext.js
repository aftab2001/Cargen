// src/context/NotificationContext.js
import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import socket from '../socket';
import 'react-toastify/dist/ReactToastify.css';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('notification', (message) => {
      setNotifications((prev) => [...prev, message]);
      toast(message);
    });

    return () => {
      socket.off('notification');
    };
  }, []);

  const markAsRead = async (userId) => {
    await axios.post('/api/message/markAsRead', { userId });
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, markAsRead }}>
      {children}
    </NotificationContext.Provider>
  );
};
