// import React from 'react'
import styled from "styled-components"
import ChatItem from "./ChatItem"
import { Typography } from "@mui/material"
import PotentialChatItem from "./PotentialChatItem"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 12px;
  width: 370px;
  height: 100%;
  min-width: 300px;
  // background-color: #eaeaea;
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

const HorizontalScrollBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 14px;
  gap: 12px;

  overflow-x: auto;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    width: 1em;
  }

  .potentialChat-item-wrapper{
    position: absolute;
  }
`

function ChatList({
  isUserChatsLoading,
  userChats,
  user,
  potentialChats,
  createChatRoom,
}) {
  console.log("Potential Chat:", potentialChats)
  console.log("userChats:", userChats)
  return (
    <Container className="ChatList container">
      {isUserChatsLoading ? <Typography>Loading New Connections...</Typography> :
        <HorizontalScrollBox className="PotentialChatList-section">
          {
            potentialChats.map((potentialChat, index) => {
              return (
                <div key={index} className="potentailChat-item-wrapper" onClick={() => {
                  console.log("create chat room onClick")
                  createChatRoom(user.id, potentialChat._id)
                }}>
                  <PotentialChatItem
                    potentialChat={potentialChat}
                    
                  />
                </div>
              )
            })
          }

        </HorizontalScrollBox>
      }

      {isUserChatsLoading ? <Typography>Loading Chats...</Typography> :
        <ScrollBox className="ChatList-section">
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
    </ Container>
  )
}

export default ChatList