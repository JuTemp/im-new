import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

interface MessageType {
    name: string, time: Date, text: string
}

interface MessagesStatusType {
    Content: {
        messages: MessageType[]
    }
}

const InitMessagesStatus: MessagesStatusType = {
    Content: {
        messages: []
    }
}

const messagesSlice: Slice<MessagesStatusType, {
    AddMessage: (messagesStatus: MessagesStatusType, action: PayloadAction<MessageType>) => void;
}, "messages"> = createSlice({
    name: 'messages',
    initialState: InitMessagesStatus,
    reducers: {
        AddMessage: (messagesStatus: MessagesStatusType, action: PayloadAction<MessageType>) => {
            messagesStatus.Content.messages = [...messagesStatus.Content.messages, action.payload]
        }
    }
})

export const { AddMessage } = messagesSlice.actions

export const messagesSelect = (state: MessagesStatusType["Content"]) => { return state.messages }

