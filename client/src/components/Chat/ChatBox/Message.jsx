import { forwardRef } from "react"
import styled from "styled-components"
import { Headline01 } from "../../../assets/styles/common"
import { Tooltip } from "antd"
import moment from "moment"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 8px 0;
    
    
    &.recipient-message-container {
        justify-content: flex-start;
    }
    
    &.user-message-container {
        justify-content: flex-end;
    }


    .message {
        padding: 8px 12px;
        border-radius: 4px;
        text-align: left;
        border-radius: 15px;
    }

    .recipient-message-content {
        color: black;
        background-color: #E4E6EB;
        margin-left: 12px;
    }    
    
    .user-message-content {
        background-color: #0099FF;
        padding: 8px 10px;
        color: white;
        margin-right: 12px;
    }
`

const Message = forwardRef(function Message({ className, message}, ref) {
    return (
        <Container className={`${className}-container`} ref={ref}>
            <Tooltip placement="leftTop" title={moment(message.createdAt).calendar()}>
                <div className={`${className}-content message`}>
                    <Headline01>{message.content}</Headline01>
                </div>
            </Tooltip>
        </Container>
    )
})

export default Message
