'use strict'
const getList = (auth, keyword) => {
    //先返回假數據（格式正確）
    return[
        {
            id: 1,
            title: 'Title A',
            content: 'Content B',
            creatTime: 1545510491112,
            author: 'Anchor1 '
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

//blogData = {}默認沒有就給空對象
const newBlog  = (blogData = {}) =>  {
    // blogData 是一個博客對象包含title content 屬性
    console.log('NewBlog blogData....', blogData);
    return {
        id: 3//表示新建博客，擦入到數據表裡面的id

    }
}


const updateBlog = (id, blogData = {}) => {
    //id就是要更新博客的id
    //nlogData 是一個博客對象，包含title content屬性 
    console.log('updateBlog updateData....', id, blogData);
    return true;
}

const delBolg = (id = {}) => {
    //ID就是要刪除id
    
    return true;
}
//返回對象：因為不只一個函數，所以要回傳好多個函數，是一個對象
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBolg
}