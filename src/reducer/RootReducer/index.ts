import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { messagesSlice } from "../MessageReducer";
import { UsersSlice } from "../UsersReducer";
import { useDispatch } from 'react-redux';

const RootReducer = combineReducers({
    messages: messagesSlice.reducer,
    users : UsersSlice.reducer,
})

export const store = configureStore({
    reducer: RootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
