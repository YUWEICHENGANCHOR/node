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

const newBlog = (blogData = {}) => {
    //blogData 是一個博客對象，包含title content屬性
    console.log('newBlog blogData....', blogData);
    return {
        id:3 //表示新建博客插入到數據表裡面的id
    }
}
//返回對象：因為不只一個函數，所以要回傳好多個函數，是一個對象
module.exports = {
    getList,
    getDetail,
    newBlog
}