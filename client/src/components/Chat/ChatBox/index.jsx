// import React from 'react'
import styled from "styled-components"
import { useFetchRecipientUser } from "../../../hooks/useFetchRecipient"
import { Heading02, BaseHeadline } from "../../../assets/styles/common"
import InputEmoji from "react-input-emoji"
import Message from "./Message"
import { Button } from "antd"
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 56px 1fr 68px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
 
  height: 100%;
  width: 100%;
  // background-color: antiquewhite;

  .content {
    grid-area: 2 / 1 / 3 / 2;
    overflow-y: scroll;
    overflow-x: hidden;
    
    .messages-container{

    }


    .recipient-message{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }

    .user-message{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }
  }
  
  .footer {
    grid-area: 3 / 1 / 4 / 2;
    padding: 8px 0px;
    background-color: white;
    // border: solid 1px black;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .react-input-emoji--container{
      height: 28px;
      background-color: #F0F2F5;
      border: none;
      
      .react-input-emoji--placeholder{
        top: -12px;
      }

      .react-input-emoji--input{
        top: -5px;
      }
    }

    .button {
      background-color: transparent;
      border: none;
      padding-right: 10px;
    }

    .send-icon {
      
    }
  }
`

const ChatBoxHeader = styled.div`
  background-color: white;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, .05);

  grid-area: 1 / 1 / 2 / 2; 
  box-sizing: border-box;
  padding: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`



function ChatBox({
  userChats,
  currentChatRoom,
  user,
  messages,
  isMessageLoading,
  updateSendMessage,
  sendMessage,
  newMessage,
}) {
  const { recipientUser } = useFetchRecipientUser(currentChatRoom, user);
  
  const renderHeader = (currentChatRoom) => {
    return (
      <ChatBoxHeader className="ChaBox header">
        <Heading02>
          {recipientUser ? recipientUser.name : "header"}
        </Heading02>
      </ChatBoxHeader>

    )
  }

  const renderBody = (messages) => {
    return (
        <div className="messages-container">
          {messages && messages.map((message, index) => {
            return (
              <Message 
                key={index}
                className={message.senderId === user.id ? "user-message" : "recipient-message"}
                message={message}
              />
            )
          })}
        </div>
    )
  }


  const clearInputMessage = () => {
    const messageInput = document.querySelector(".react-input-emoji--input");
    messageInput.innerHTML = "" 
  }


  const renderFooter = () => {
    return (
      <div className="footer">
        <InputEmoji 
          className="input-box"
          onChange={(content)=>{
            updateSendMessage(content)
          }}
          onKeyUp={(e) => {
            if(e.key == "Enter"){
              console.log("Enter pressed")
            }else{
              console.log(`e pressed: ${e}`)
            }
          }}
          ></InputEmoji>
        <Button
          className="button"
          type="link"
          icon={<SendIcon className="send-icon" fontSize="medium"/>}
          onClick={() => {
            sendMessage(user.id, newMessage)
            clearInputMessage()
          }}
        />
      </div>
    )
  }

  console.log("currentChat:", currentChatRoom)
  return (
    <Container className="ChatBox container">
      {renderHeader(currentChatRoom)}
      <div className="ChatBox content">
        {
          isMessageLoading ? <BaseHeadline>Loading messages</BaseHeadline> : (
            renderBody(messages)
          )
        }
      </div>
      {renderFooter()}
    </Container>
  )
}

export default ChatBox