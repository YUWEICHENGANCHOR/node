'use strict';
//對象
const { getList, getDetail } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
    const method = req.method; //GET POST
    
    //獲取博客
    if(method === 'GET' && req.path === '/api/blog/list'){
        
        const author = req.query.author || ''; // '' 是用來判斷用的，若沒有就為空
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);
        
        return new SuccessModel(listData);
    };

    //獲取博客詳情
    if(method === 'GET' && req.path ==='/api/blog/detail'){
        const id = req.query.id;
        const data = getDetail(id);
        return new SuccessModel(data);
    };

    //新建博客詳情
    if(method === 'POST' && req.path ==='/api/blog/new'){
        return {
            msg: 'This is new blog interface'
        }
    };

    //更新博客詳情
    if(method === 'POST' && req.path ==='/api/blog/update'){
        return {
            msg: 'This is update blog interface'
        }
    };

    //刪除博客詳情
    if(method === 'POST' && req.path ==='/api/blog/del'){
        return {
            msg: 'This is delete blog interface'
        }
    };
}
module.exports = handleBlogRouter;