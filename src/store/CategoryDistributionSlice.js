import { createSlice } from "@reduxjs/toolkit";

const CategoryDistribution = createSlice({
    name: 'category_distribution',
    initialState: {
        labels: null,
        data: null
    },
    reducers: {
        addLabels: (state, action) => {
            state.labels = action.payload
        },
        addData: (state, action) => {
            state.data = action.payload
        },
    }
})

export default CategoryDistribution.reducer
export const { addData, addLabels } = CategoryDistribution.actions