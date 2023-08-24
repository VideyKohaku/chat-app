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
    userChatsError,
  } = useContext(ChatContext)

  console.log("User Chat:", userChats)
  return (
    <>
      {userChats?.length < 1 ? <p>No user chat found</p> : (
        < Container className='chat-body-container'>
          <ChatList
            className='chat-list' 
            isUserChatsLoading={isUserChatsLoading}
            userChats={userChats}
            user={user}
          />
          <ChatBox 
            className='chat-box' 
          />
        </Container >)
      }
    </>
  )
}

export default Chat