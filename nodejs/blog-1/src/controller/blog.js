'use strict'
const getList = (auth, keyword) => {
    //先返回假數據（格式正確）
    return[
        {
            id: 1,
            title: 'Title A',
            content: 'Content B',
            creatTime: 1545510491112,
            author: 'Anchor1'
        },
        {
            id: 1,
            title: 'Title B',
            content: 'Content B',
            creatTime: 1545512456655,
            author: 'Anchor2'
        }
    ]
} 



const getDetail = (id) => {
    //先返回假數據
    return[
        {
            id: 1,
            title: 'Title A',
            content: 'Content B',
            creatTime: 1545510491112,
            author: 'Anchor1'
        }
    ]
}
//返回對象：因為不只一個函數，所以要回傳好多個函數，是一個對象
module.exports = {
    getList,
    getDetail
}