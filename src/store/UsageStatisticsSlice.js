import { createSlice } from "@reduxjs/toolkit";

const UsageStatistics = createSlice({
    name: 'Usage_statistics',
    initialState: {
        platform: {
            labels: null,
            data: null
        },
        country: {
            labels: null,
            data: null
        }
    },
    reducers: {
        addPlatformLabels: (state, action) => {
            state.platform.labels = action.payload
        },
        addPlatformData: (state, action) => {
            state.platform.data = action.payload
        },
        addCountryData: (state, action) => {
            state.country.data = action.payload
        },
        addCountryLabels: (state, action) => {
            state.country.labels = action.payload
        },
    }
})

export default UsageStatistics.reducer
export const { addPlatformLabels, addPlatformData, addCountryData, addCountryLabels } = UsageStatistics.actions