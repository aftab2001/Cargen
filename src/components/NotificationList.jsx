// src/components/NotificationList.js
import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const NotificationList = () => {
  const { notifications, markAsRead } = useContext(NotificationContext);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <button onClick={() => markAsRead('userId')}>Mark All as Read</button>
    </div>
  );
};

export default NotificationList;
