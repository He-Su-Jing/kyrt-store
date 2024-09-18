import axios from "../utils"

// 创建首页信息数据
export function getMenulistApi(data) {
    return axios({
        url: "/categories",
        method: 'get',
        data
    })
}


// 获取records数据
// export function getRecordsApi(params) {
//     return axios({
//         url: "/category-as-tree/1",
//         method: 'get',
//         params
//     })
// }