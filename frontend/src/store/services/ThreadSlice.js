import { createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "../../axiosAPI";


export const CreateThread =  createAsyncThunk(
    'thread/create',
    async(data) => {
        return await axios.post('/thread', data).then(res => res.data);
    }
)

export const ThreadGet = createAsyncThunk(
    'thread/get',
    async() => {
        return await axios.get('/thread').then(res => res.data);
    }
)

const initialState = {
    threads:[]
}

const ThreadSlice = createSlice({
    name:'thread',
    initialState,
    extraReducers:builder => {
        builder
        .addCase(CreateThread.fulfilled,(state,action) => {
            state.threads.push(action.payload);
        })
        .addCase(ThreadGet.fulfilled,(state,action) => {
            state.threads = action.payload;
        })
    }
})

export default ThreadSlice.reducer;