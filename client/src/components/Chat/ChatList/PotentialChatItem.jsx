import styled from 'styled-components'
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

const Container = styled(Button)`
  width: 80px;
  height: 32px;
  background-color: #4791DB;
  text-aligns: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: none;

  .title{
    color: white;
  }

`


function PotentialChatItem({ potentialChat }) {
  return (
    <Container className='PotentialChat container' type="primary">
      <BaseHeading className='title'>{potentialChat?.name}</BaseHeading>
    </Container>
  )
}

export default PotentialChatItem