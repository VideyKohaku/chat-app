// import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  background-color: antiquewhite;
`

function ChatBox() {
  return (
    <Container className="ChatBox container">Chat Box</Container>
  )
}

export default ChatBox