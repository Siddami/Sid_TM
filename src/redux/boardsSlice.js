import { createSlice } from "@reduxjs/toolkit";
import data from '../Data/data.json';

const boardsSlice = createSlice({
    name : 'boards',
    initialState : data.boards,
    reducers: {
        //soon
    }
})

export default boardsSlice