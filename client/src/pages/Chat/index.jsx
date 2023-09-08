import { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext'
import ChatList from '../../components/Chat/ChatList'
import ChatBox from '../../components/Chat/ChatBox'
import styled from 'styled-components'
import { AuthContext } from '../../context/AuthContext'

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: columm;
  // gap: 12px;

`

function Chat() {
  const {
    user,
  } = useContext(AuthContext)
  const {
    userChats,
    isUserChatsLoading,
    // userChatsError,
    potentialChats,
    createChatRoom,
    currentChatRoom,
    updateCurrentChat,
    messages,
    isMessageLoading,
    updateSendMessage,
    sendMessage,
    newMessage,
    onlineUsers,
  } = useContext(ChatContext)

  // console.log("currentChatRoom in chat container:", currentChatRoom)
  return (
    < Container className='chat-body-container'>
      <ChatList
        className='chat-list'
        isUserChatsLoading={isUserChatsLoading}
        userChats={userChats}
        user={user}
        potentialChats={potentialChats}
        createChatRoom={createChatRoom}
        updateCurrentChat={updateCurrentChat}
        onlineUsers={onlineUsers}
      />
      <ChatBox
        className='chat-box'
        user={user}
        userChats={userChats}
        currentChatRoom={currentChatRoom}
        messages={messages}
        isMessageLoading={isMessageLoading}
        updateSendMessage={updateSendMessage}
        sendMessage={sendMessage}
        newMessage={newMessage}
      />
    </Container >
  )
}

export default Chat