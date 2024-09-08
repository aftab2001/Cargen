import React, { useState, useEffect, useContext } from 'react';
import { SocketContext } from '../contexts/SocketContext';
import { getUnreadMessages, markMessagesAsRead } from '../services/messageService';

const Chat = ({ userId, receiverId }) => {
    const socket = useContext(SocketContext);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.emit('joinRoom', { userId });

        socket.on('receiveMessage', (data) => {
            if (data.receiver === userId) {
                setMessages((prevMessages) => [...prevMessages, data]);
            }
        });

        getUnreadMessages(userId).then((messages) => {
            setMessages(messages);
            markMessagesAsRead(userId);
        });

        return () => {
            socket.off('receiveMessage');
        };
    }, [userId, socket]);

    const sendMessage = () => {
        const newMessage = { sender: userId, receiver: receiverId, message }; // Use actual receiver ID
        socket.emit('sendMessage', newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessage('');
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender}:</strong> {msg.message}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
