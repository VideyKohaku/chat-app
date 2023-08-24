// import React from 'react'
import styled from "styled-components"
import ChatItem from "./ChatItem"
import { Typography } from "@mui/material"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 370px;
  height: 100%;
  min-width: 300px;
  background-color: aliceblue;
`

const ScrollBox = styled.div`
  // display: flex;
  // flex-direction: column;
 
  margin: 0;
  // height: calc(100%-62px) 
  overflow-y: auto;

  &::-webkit-scrollbar {
  display: none;
  }
  .inner-container;
`

function ChatList({
  isUserChatsLoading,
  userChats,
  user,
}) {
  return (
    <Container className="ChatList container">
      {isUserChatsLoading ? <Typography>Loading Chats...</Typography> :
        <ScrollBox>
          {
            userChats.map((userChatRoom, index) => {
              return (
                <div
                  key={index}
                >
                  <ChatItem 
                    userChatRoom={userChatRoom}
                    user={user} />
                </div>
              )
            })
          }
          <ChatItem>Item 2</ChatItem>
          <ChatItem>Item 3</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 1</ChatItem>
          <ChatItem>Item 1</ChatItem>
          <ChatItem>Item 1</ChatItem>
          <ChatItem>Item 2</ChatItem>
          <ChatItem>Item 3</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 2</ChatItem>
          <ChatItem>Item 3</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 2</ChatItem>
          <ChatItem>Item 3</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
          <ChatItem>Item 4</ChatItem>
        </ScrollBox>
      }
    </Container>
  )
}

export default ChatList