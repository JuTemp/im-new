import { io } from "socket.io-client";

export const createWs = (onConnect: () => void, onEnter: (data: any) => void,
    onLeave: (data: any) => void, onMessage: (data: any) => void): void => {

    const socket = io("wss://jtp0415.top:8453/");

    // let ConnectResult: ReturnType<typeof onConnect>;
    // let EnterResult: ReturnType<typeof onEnter>;
    // let LeaveResult: ReturnType<typeof onLeave>;
    // let MessageResult: ReturnType<typeof onMessage>;

    socket.on('connect', () => {
        onConnect()
    })

    socket.on('enter', (data: any) => {
        onEnter(data)
    })

    socket.on('leave', (data: any) => {
        onLeave(data)
    })

    socket.on('message', (data: any) => {
        onMessage(data)
    })

}