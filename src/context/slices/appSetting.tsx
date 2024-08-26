import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    isNavOpen: boolean;
    lastUrl: string,
}

const initialState: AppState = {
    isNavOpen: false,
    lastUrl: "/",
}

const appSettingSlice = createSlice({
    name: "appSetting",
    initialState,
    reducers: {
        setNavOpen: (state, action: PayloadAction<boolean>) => {
            state.isNavOpen = action.payload;
        },

        toggleNavOpen: (state) => {
            state.isNavOpen = !state.isNavOpen;
        },

        setLastUrl: (state, action: PayloadAction<string>) => {
            state.lastUrl = action.payload;
        },
    },
})

export const {setNavOpen, toggleNavOpen, setLastUrl} = appSettingSlice.actions;
export default appSettingSlice;