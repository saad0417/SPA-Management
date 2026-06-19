import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: false,
        userData: null,
        loading: true 
    },
    reducers: {
        login: (state, action) => {
            state.status = true
            state.userData = action.payload
            state.loading = false 
        },
        logout: (state) => {
            state.status = false
            state.userData = null
            state.loading = false 
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;