//step--1
import {configureStore} from '@reduxjs/toolkit' 

//step--8 
import todoReducer from '../features/todo/todoSlice'


//step--2
export const store = configureStore({
    //Step--9
    reducer:todoReducer
})



