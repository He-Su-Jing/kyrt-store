import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getMenulistApi } from "../../api/modules/munulistapi"

export const menulistAsync = createAsyncThunk('user/menulistAsync', async (data) => {
    let res = await getMenulistApi(data)
    console.log("------", res)
    return res
})

const menulistSlice = createSlice({
    name: "menulisttit",
    initialState: {
        menulist: []
    },
    // 定义处理器
    reducers: {
        // changemenulist: (state, action) => {
        //     console.log(state, "==========");
        // },
    },
    // 定义异步 thunk 的额外 reducer    menulistAsync.pending 之前  menulistAsync.fulfilled 之后
    extraReducers: (builder) => {
        builder
            .addCase(menulistAsync.fulfilled, (state, action) => {
                console.log("2", action)
                state.menulist = action.payload?.result;
            })
    }
});


// export const { changemenulist } = menulistSlice.actions;

export default menulistSlice.reducer;




