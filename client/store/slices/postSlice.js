import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        allPosts: [],
        myPosts: []
    },
    reducers: {
        setAllPosts: (state, action) => {
            state.allPosts = action.payload
        },
        setMyPosts: (action, payload) => {
            state.myPosts = action.payload;
        }
    }
});

export const { setAllPosts, setMyPosts  } = postSlice.actions;
export default postSlice.reducer;
