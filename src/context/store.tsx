import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import appSettingSlice from "./slices/appSetting";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        appSetting : appSettingSlice.reducer,
    }
})

export default store;

export type RootStatus = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;