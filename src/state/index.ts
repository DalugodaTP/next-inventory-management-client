import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
    isSidebarCollased: boolean;
    isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
    isSidebarCollased: false,
    isDarkMode: false
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollased = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
    }
})

export const {setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;