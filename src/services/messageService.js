import axios from 'axios'

export const getUnreadMessages = async(userId)=>{
    const response = await axios.get(`/api/message/unread/${userId}`)
    return response.data;
}


export const markMessageAsRead = async(userId)=>{
    await axios.post('/api/message/markAsRead',{userId})
}