import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from './constants/YoutubeApi';
const ChatSlice = createSlice({
    name: "chat",
    initialState: {
        messages:[]
    },
    reducers:{
        addMessages : (state,action)=>{
          if (state.messages.length >= LIVE_CHAT_COUNT) {
						state.messages.splice(0, 1); // Remove the last element - oldest message from reversed array
					}
            state.messages.push(action.payload)
        }
    }
})
export const {addMessages}= ChatSlice.actions;
export default ChatSlice.reducer;