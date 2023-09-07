import styled, { keyframes } from 'styled-components'
import { BaseHeading } from '../../../assets/styles/common'
import { Button } from "antd"


// const Container = styled.div`
//   width: 80px;
//   height: 32px;
//   background-color: aliceblue;
//   text-aligns: center;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// `

const blink = keyframes`
  100% { 
    transform: scale(1.1, 1.1); 
    opacity: 0;
  }
`

const Container = styled(Button)`
  width: 80px;
  height: 32px;
  background-color: #4791DB;
  text-aligns: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  border: none;

  .title{
    color: white;
  }

  &.online-user {
    background-color: #0fcc45;
  }

  // .online-user {
  //   animation: ${blink} 2s linear infinite;
  //   background-color: #4791DB;
  //   position: relative;
  //   width: 80px;
  //   height: 32px;
  //   position: relative;
  //   z-index: 1;
  // }
`



function PotentialChatItem({ potentialChat, isOnline }) {
  return (
    <Container className={`PotentialChat container ${isOnline}`} type="primary">
      <BaseHeading className='title'>{potentialChat?.name}</BaseHeading>
    </Container>
  )
}

export default PotentialChatItem