// import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  background-color: antiquewhite;
`

function ChatBox({
  userChats,
}) {
  return (
    <Container className="ChatBox container">{userChats?.length > 1 ? (<p>No chat room found</p>) : (<p>Chat room content</p>)}</Container>
  )
}

export default ChatBox