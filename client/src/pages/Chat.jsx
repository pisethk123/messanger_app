import React from 'react'
import ChatTitle from '../components/ChatTitle'
import ChatSelectedUser from '../components/ChatSelectedUser'
import ChatList from '../components/ChatList'
import ChatContent from '../components/ChatContent'
import ChatForm from '../components/ChatForm'

const Chat = () => {
  return (
      <div className="grid grid-cols-[350px_1fr_1fr] grid-rows-[auto_1fr_auto] pt-14 min-h-screen min-w-[1000px]">
        <ChatTitle/>
        <ChatSelectedUser/>
        <ChatList/>
        <ChatContent/>
        <ChatForm/>
      </div>  
  ) 
}

export default Chat
