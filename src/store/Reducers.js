import {createStore} from 'redux'
// import { configureStore, createSlice } from '@reduxjs/toolkit'
import {initState} from './state'



const businessReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, {name: action.payload.name, address: action.payload.address, hours: action.payload.hours, description: action.payload.description}]
        case 'REMOVE':
            const copy = [...state]
            copy.splice(action.payload, 1)
            return copy
        default:
            return state
    }
}

const store = createStore(businessReducer)

// store.subscribe(() => {
//     console.log(store.getState())
// })

export default store



// const businessSlice = createSlice({
//     name: 'business',
//     initialState: initState,
//     reducers: {
//         addPlace(state) {
            
//         }
//     }
// })