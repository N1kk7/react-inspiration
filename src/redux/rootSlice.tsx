import { createSlice } from "@reduxjs/toolkit";


export const rootSlice = createSlice({
    name: 'rootSLice',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, action) => {

            console.log(action);
            
            
            state.count += 1

        },
        decrement: (state) => {
            state.count -= 1
        }
    }
})

export const { increment, decrement } = rootSlice.actions;
export default rootSlice.reducer;