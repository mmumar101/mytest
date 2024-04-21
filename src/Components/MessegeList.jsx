import { useState, useEffect } from 'react';
import axios from 'axios';
import { Api } from './Api';

function MessageList() {
  const [messages, setMessages] = useState([]);

  const myMessage =  axios.get(Api)
  .then(response => {
    setMessages(response.data);
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  useEffect(() => {
   myMessage
  }, []);

  return (
    <div className="max-w-screen-md mx-auto p-8 ">
      <h1 className="text-3xl font-bold text-center mb-6">Message List</h1>
      <div className="space-y-6">
        {messages?.map(message => (
          <div key={message.id} className="bg-gray-100 p-4 rounded-lg">
            <p className="font-bold">Sender: {message.sender_name}</p>
            <p className="mt-2">Message: {message.message_text}</p>
            <p className="mt-2">Date: {new Date(message.message_date).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageList;