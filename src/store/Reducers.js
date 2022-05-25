import { createStore } from "redux";
// import { configureStore, createSlice } from '@reduxjs/toolkit'
import { initState } from "./state";

const businessReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        businesses: [
          ...state.businesses,
          {
            name: action.payload.name,
            address: action.payload.address,
            hours: action.payload.hours,
            description: action.payload.description,
          },
        ],
      };
    case "REMOVE":
      const copy = [...state.businesses];
      copy.splice(action.payload, 1);
      return {
        ...state,
        businesses: copy,
      };
    case "FLIPFLAG":
      return {
        ...state,
        loginIdentifier: !state.loginIdentifier
      };
    case 'ADD_COORDS':
      return {
        ...state,
        coords: {
          ...action.payload
        }
      }
    default:
      return state;
  }
};

const store = createStore(businessReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;

// const businessSlice = createSlice({
//     name: 'business',
//     initialState: initState,
//     reducers: {
//         addPlace(state) {

//         }
//     }
// })
