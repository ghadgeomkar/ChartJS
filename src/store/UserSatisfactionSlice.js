import { createSlice } from "@reduxjs/toolkit";

const UserSatisfaction = createSlice({
    name: 'User_satisfaction',
    initialState: {
        labels: null,
        data: null
    },
    reducers: {
        addUserLabels: (state, action) => {
            state.labels = action.payload
        },
        addUserData: (state, action) => {
            state.data = action.payload
        },
    }
})

export default UserSatisfaction.reducer
export const { addUserLabels, addUserData} = UserSatisfaction.actions