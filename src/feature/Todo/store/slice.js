import { createSlice } from "@reduxjs/toolkit";
import { getBranchTodo } from "./action";

const initialState = {
    todos: [],
    isLoading: false,
    error: "",
};
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBranchTodo.fulfilled, (state, { payload }) => {
                state.todos = payload;
                state.isLoading = false;
            })
            .addCase(getBranchTodo.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBranchTodo.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export default todoSlice.reducer;