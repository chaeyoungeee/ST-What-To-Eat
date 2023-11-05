import { configureStore, createSlice } from '@reduxjs/toolkit'

let isLogin = createSlice({
    name: 'isLogin',
    initialState: '',
    reducers: {
        initIsLogin(state, action) {
            return action.payload
        },
        setIsLogin(state, action) {
            localStorage.setItem("isLogin", action.payload)
            return action.payload;
        }
    }
})

export default configureStore({
    reducer: {
        isLogin: isLogin.reducer
    }
}) 

export let { setIsLogin, initIsLogin } = isLogin.actions;