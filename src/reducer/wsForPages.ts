import { useDispatch } from "react-redux"
import { AddMessage } from "./MessageReducer"
import { AddUsers } from "./UsersReducer"

const dispatch = useDispatch()

export const onConnect = (data:any) => {
    dispatch(AddUsers({
        username: "You",
        description: "online"
    }))
}

export const onEnter = (data: any) => {

}

export const onLeave = (data: any) => {

}

export const onMessage = (data: any) => {

}

