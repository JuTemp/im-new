import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface UserType {
    username: string,
    description: string,
}

interface UsersStatusType {
    RightSider: {
        users: UserType[]
    }
}

const InitUsersStatus: UsersStatusType = {
    RightSider: {
        users: []
    }
}

const UsersSlice = createSlice({
    name: 'users',
    initialState: InitUsersStatus,
    reducers: {
        AddUsers: (usersState: UsersStatusType, action: PayloadAction<UserType>) => {
            usersState.RightSider.users = [...usersState.RightSider.users, action.payload]
        },
        RemoveUsers: (usersState: UsersStatusType, action: PayloadAction<UserType>) => {
            usersState.RightSider.users = usersState.RightSider.users.filter(
                (item) => item.username !== action.payload.username)
        }
    }
})

export const { AddUsers, RemoveUsers } = UsersSlice.actions

export const usersSelect = (state: UsersStatusType["RightSider"]) => { return state.users }

