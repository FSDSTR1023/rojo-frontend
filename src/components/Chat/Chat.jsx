import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import styles from './Chat.module.css'
import IconPerson from '../IconPerson'
import ChatIcon from '../ChatIcon'

export default function Chat() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [chatOpen, setChatOpen] = useState(false)

  const socket = io('http://localhost:3000')

  useEffect(() => {
    socket.on('message', receiveMessage)

    return () => {
      socket.off('message', receiveMessage)
    }
  }, [])

  const receiveMessage = (message) => {
    if (message.from !== 'Me') {
      setMessages((state) => [...state, message])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMessage = {
      body: message,
      from: 'Me',
    }
    //setMessages((state) => [newMessage, ...state])
    setMessage('')
    socket.emit('message', newMessage.body)
  }

  const toggleChatOpen = () => {
    setChatOpen((prevState) => !prevState)
  }

  return (
    <>
      <button onClick={toggleChatOpen} className={styles.chatButton}>
        <ChatIcon />
      </button>
      {chatOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.header}>
            <IconPerson />
            <p>Chat with your friends!</p>
          </div>
          <div className={styles.messageContainer}>
            <ul>
              {messages.map((message, i) => (
                <li key={i}>
                  {message.from}: {message.body}
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleSubmit} className={styles.writeContainer}>
            <input
              type="text"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  )
}
