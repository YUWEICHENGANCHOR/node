'use strict'
const { exec } = require('../db/mysql');

const getList = (auth, keyword) => {
    //1=1 是永遠成立 但沒有1=1的話，萬一author keyword都沒有值就會報錯，有得話也沒問題
    let sql = `select * from blogs where 1=1 `;
    if(author){
        sql += `and author=${anthor}`
    }
    if(keyword){
        sql += `and title like '%${keyword}%' `;
    }
    sql += `order by createtime desc; `
    
    //返回promise
    return exec(sql);
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