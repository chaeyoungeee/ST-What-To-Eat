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

let category = createSlice({
    name: 'category',
    initialState: [
        {
            name: '한식',
            color: '#ff193c',
        },
        {
            name: '양식',
            color: '#af24ff',
        },
        {
            name: '일식',
            color: '#ffaf24',
        },
        {
            name: '떡볶이',
            color: '#ff24bd',
        },
        {
            name: '패스트푸드',
            color: '#00d8f0',
        },
        {
            name: '곱창/막창',
            color: '#1f31ff',
        },
        {
            name: '기타',
            color: '#ffd900',
        },
    ],
});

export default configureStore({
    reducer: {
        isLogin: isLogin.reducer,
        inputComp: inputComp.reducer,
        places: places.reducer,
        category: category.reducer
    }
}) 

export let { setIsLogin, initIsLogin } = isLogin.actions;
export let { setInputComp } = inputComp.actions;
export let { initPlaces, sortRecommend, sortLike } = places.actions;