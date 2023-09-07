import styled from "styled-components"
import { useFetchRecipientUser } from "../../../hooks/useFetchRecipient"
import { Card } from "antd"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const { Meta } = Card;

// const Container = styled.div`
//     display: flex;
//     flex-direction: row;
//     border: solid 1px;
//     width: 100%;

// `

const ChatCard = styled(Card)`
  width: 100%;
  border: none;

  :hover{
    background-color: #f2f2f2;
  }

  :focus{
    background-color: #C9EBF9;
  }

  .ant-card-body{
    height: 72px;
    width: 100%;
    padding: 12px;
  }
  .ant-card-meta{
    // gap: 4px;

    .ant-card-meta-avatar{
      width: 52px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      // padding: 4px;
      padding-right: 0;
    }

    .ant-card-meta-title{
      margin-bottom: 4px;
    }

    .ant-card-meta-description{
      display: inline-block;
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

const TitleChat = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // margin-bottom: 4px;

  .title{
    font-size: 18px;
    font-weight: 600; 
  }

  .date{
    font-size: 12px;
    color: rgba(0,0,0,0.45);
  }
`
const AvatarChat = styled.div`
  width: 56px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;

  .user-status{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 12px;
    left: -10px;
    
    position: relative;
    
    &.online{
      background-color: #0fcc45;
    }

    &.offline{
      opacity: 0;
    }
  }
`

const renderAvatar = (recipientUser, onlineUsers) => {
  return (
    <AvatarChat>
      <AccountCircleIcon sx={{color:"rgb(71, 145, 219)", fontSize: 40}} />
      <span className={`user-status ${recipientUser && onlineUsers[recipientUser._id] ? "online" : "offline"}`}></span>
    </AvatarChat>
  )
}

const renderTitle = (recipientUser) => {
  return (
    <TitleChat className="display">
      <div className="title">{recipientUser ? recipientUser.name : "User no name"}</div>
      <div className="date">24/02/2023</div>
    </TitleChat>
  )
}

function ChatItem({
  userChatRoom,
  user,
  onlineUsers,
}) {
  console.log("chatItem:", userChatRoom)
  const { recipientUser } = useFetchRecipientUser(userChatRoom, user)
  console.log("recipient user", recipientUser)
  return (
    <ChatCard hoverable={true}>
      <Meta
        avatar={renderAvatar(recipientUser, onlineUsers)}
        // title={recipientUser ? recipientUser.name : "User no name"}
        title={renderTitle(recipientUser)}
        description="This is the first message and also a super long message"
      >
      </Meta>
    </ChatCard>
  )
}

export default ChatItem