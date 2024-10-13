//Step--3
import { createSlice, nanoid } from "@reduxjs/toolkit";



//step--4
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};


//Step--5
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action ) => {
        const todo = {
            id: nanoid(),
            text: action.payload,
        }
        state.todos.push(todo);
    },
    removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    updateTodo: (state, action) => {
     state.todos.map((todo => {
        if(todo.id === action.payload.id){
            todo.text = action.payload.text;
        }
     }))
    },
  },
});

//Step--6
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;


//Step--7
export default todoSlice.reducer;