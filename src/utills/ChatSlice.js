import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";


const ChatSlice = createSlice({
        name:"chat",
        initialState:{
              messages:[]
        },
        reducers:{
             addMessage:(state,action)=>{
                state.messages.splice(LIVE_CHAT_COUNT,1); // this is very important for knowing ,when the length of message is greater than 50 then it remove the one message from the messages
                state.messages.unshift(action.payload);
             }
        }

    });

export const {addMessage} = ChatSlice.actions;

export  default ChatSlice.reducer;