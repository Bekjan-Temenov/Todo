import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "../api";

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
    }
);
