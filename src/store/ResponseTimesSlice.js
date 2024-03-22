import { createSlice } from "@reduxjs/toolkit";

const ResponseTimes = createSlice({
    name: 'Response_times',
    initialState: {
        day: {
            labels: null,
            date: null
        },
        week: {
            labels: null,
            date: null
        },

    },
    reducers: {
        addDayLabels: (state, action) => {
            state.day.labels = action.payload
        },
        addDayData: (state, action) => {
            state.day.date = action.payload
        },
        addWeekLabels: (state, action) => {
            state.week.labels = action.payload
        },
        addWeekData: (state, action) => {
            state.week.date = action.payload
        },
    }
})

export default ResponseTimes.reducer
export const { addDayLabels, addDayData, addWeekLabels, addWeekData } = ResponseTimes.actions