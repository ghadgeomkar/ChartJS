import { configureStore } from "@reduxjs/toolkit";
import CategoryDistributionSlice from "./CategoryDistributionSlice";
import ResponseTimesSlice from "./ResponseTimesSlice";
import UsageStatisticsSlice from "./UsageStatisticsSlice";
import UserSatisfactionSlice from "./UserSatisfactionSlice";

const store = configureStore({
    reducer: {
        CategoryDistribution: CategoryDistributionSlice,
        ResponseTimes: ResponseTimesSlice,
        UserSatisfaction: UserSatisfactionSlice,
        UsageStatistics: UsageStatisticsSlice,
    }
})

export default store