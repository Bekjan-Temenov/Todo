import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "../api.js"
export const getBranchTodo = createAsyncThunk(
    'todo/getTodo',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await api.getBranchReq();
            console.log(data)
            return data;
        } catch (error) {

            return rejectWithValue("Error fetching users");
        }
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

export const getBranchTodo = createAsyncThunk(
  'todo/getTodo',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getBranchReq();
      return data;
    } catch (error) {
      return rejectWithValue("Error fetching todos");
    }
  }
);


export const addTodo = createAsyncThunk(
  'todo/addTodo',
  async (newTodo, { rejectWithValue }) => {
    try {
      const { data } = await api.postBranchReq(newTodo);
      return data;
    } catch (error) {
      return rejectWithValue("Error adding todo");
    }
  }
);

export const updateTodo = createAsyncThunk(
  'todo/updateTodo',
  async ({ id, ...updateData }, { rejectWithValue }) => {
    try {
      const { data } = await api.putBranchReq(id, updateData);
      return data;
    } catch (error) {
      return rejectWithValue("Error updating todo");
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteBranchReq(id);
      return id;
    } catch (error) {
      return rejectWithValue("Error deleting todo");
    }
  }
);
