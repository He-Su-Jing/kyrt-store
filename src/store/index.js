// 定义仓库
// 引入configureStore 定义仓库
import { configureStore } from "@reduxjs/toolkit";
// 导入counterSlice
import counter from "./modules/counterSlice";
import menulisttit from "./modules/menulistSlice"
// 导出
export default configureStore({
    // 数据处理
    reducer: {
        counter,
        menulisttit
    }
});

