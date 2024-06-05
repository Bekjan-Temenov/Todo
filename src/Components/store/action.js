import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiRoot = axios.create({
    baseURL: "http://192.168.68.107:8008"
});

export const fetchTasks = createAsyncThunk('todo/fetchTasks', async () => {
    const response = await apiRoot.get('/tasks');
    return response.data;
});

export const addTask = createAsyncThunk('todo/addTask', async (task) => {
    const response = await apiRoot.post('/tasks', task);
    return response.data;
});

export const updateTask = createAsyncThunk('todo/updateTask', async ({ id, task }) => {
    const response = await apiRoot.put(`/tasks/${id}`, task);
    return response.data;
});

export const deleteTask = createAsyncThunk('todo/deleteTask', async (id) => {
    await apiRoot.delete(`/tasks/${id}`);
    return id;
});

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(task => task.id === action.payload.id);
                state.tasks[index] = action.payload;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(task => task.id !== action.payload);
            });
    }
});

export default todoSlice.reducer;
