import { useEffect, useState } from "react";
import { findUser } from "../services/auth.service";

export const useFetchRecipientUser = (chatRoom, user) => {
    const [recipientUser, setRecipientUser] = useState(null)
    const [error, setError] = useState(null)

    const recipientID = chatRoom?.members.find((memberID) => {
        return memberID !== user?.id
    })

    useEffect(() => {
        const getUserByID = async () => {
            if (!recipientID) return null

            const userData = await findUser(`/${recipientID}`)
            if (userData.error) {
                return setError(userData.error)
            }
            setRecipientUser(userData)
        }
        getUserByID()
    }, [recipientID])

    return { recipientUser, error }
}