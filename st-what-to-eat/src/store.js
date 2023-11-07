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


let inputComp = createSlice({
    name: 'inputComp',
    initialState: false,
    reducers: {
        setInputComp(state, action) {
            return !state;
        }
    }
})

let places = createSlice({
    name: 'places',
    initialState: [],
    reducers: {
        initPlaces(state, action) {
            return action.payload;
        },
        sortRecommend(state, action) {
            state.sort((a, b)=>{ return b.recommend - a.recommend })
        },
        sortLike(state, action) {
            state.sort((a, b) => { return b.like - a.like })
        }
    }
})

export default configureStore({
    reducer: {
        isLogin: isLogin.reducer,
        inputComp: inputComp.reducer,
        places: places.reducer
    }
}) 

export let { setIsLogin, initIsLogin } = isLogin.actions;
export let { setInputComp } = inputComp.actions;
export let { initPlaces, sortRecommend, sortLike } = places.actions;