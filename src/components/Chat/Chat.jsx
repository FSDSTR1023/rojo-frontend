import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import styles from './Chat.module.css'
import IconPerson from '../IconPerson'
import ChatIcon from '../ChatIcon'
import { useProfile } from '../../context/ProfileContext'

export default function Chat() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [chatOpen, setChatOpen] = useState(false)
  const [userConnectedMessage, setUserConnectedMessage] = useState('')
  const { profile } = useProfile()

  const socket = io('http://localhost:3000')

  useEffect(() => {
    socket.on('message', receiveMessage)

    socket.emit('userConnection', profile._id, profile.userName)

    socket.on('userConnectionMsg', (userName) => {
      setUserConnectedMessage(`${userName} is connected`)
    })

    socket.on('userDisconnectMsg', (userName) => {
      setUserConnectedMessage(`${userName} is disconnected`)
    })

    return () => {
      socket.off('message', receiveMessage)
      socket.emit('userDisconnect', profile._id, profile.userName)
    }
  }, [])

  const receiveMessage = (message) => {
    setMessages((state) => [...state, message])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMessage = {
      body: message,
      from: profile.userName,
    }
    setMessage('')
    socket.emit('message', newMessage)
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
              {userConnectedMessage && <li>{userConnectedMessage}</li>}
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