import { createSlice } from '@reduxjs/toolkit';
import { getBranchTodo, addTodo, updateTodo, deleteTodo } from './action';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBranchTodo.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getBranchTodo.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.isLoading = false;
            })
            .addCase(getBranchTodo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(addTodo.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
                state.isLoading = false;
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(updateTodo.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const index = state.todos.findIndex(todo => todo.id === action.payload.id);
                if (index !== -1) {
                    state.todos[index] = action.payload;
                }
                state.isLoading = false;
            })
            .addCase(updateTodo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(deleteTodo.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload);
                state.isLoading = false;
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default todoSlice.reducer;
