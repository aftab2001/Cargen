// src/components/UnreadMessages.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UnreadMessages = ({ userId }) => {
  const [unreadMessages, setUnreadMessages] = useState([]);

  useEffect(() => {
    const fetchUnreadMessages = async () => {
      const response = await axios.get(`/api/message/unread/${userId}`);
      setUnreadMessages(response.data);
    };

    fetchUnreadMessages();
  }, [userId]);

  return (
    <div>
      <h2>Unread Messages</h2>
      <ul>
        {unreadMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default UnreadMessages;
