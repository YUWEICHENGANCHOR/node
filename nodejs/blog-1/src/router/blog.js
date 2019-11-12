'use strict';
//對象
const { getList,
        getDetail, 
        newBlog,
        updateBlog,
        delBolg} = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
    const method = req.method; //GET POST
        const data = newBlog(req.bod);
        const id = req.query.id;
    
    //獲取博客
    if(method === 'GET' && req.path === '/api/blog/list'){
        
        const author = req.query.author || ''; // '' 是用來判斷用的，若沒有就為空
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);
        
        return new SuccessModel(listData);
    };

    //獲取博客詳情
    if(method === 'GET' && req.path ==='/api/blog/detail'){
        
        const data = getDetail(id);
        return new SuccessModel(data);
    };

    //新建博客詳情
    if(method === 'POST' && req.path ==='/api/blog/new'){
       const data = newBlog(req.body);
        return new SuccessModel(data);
        
    };

    //更新博客詳情
    if(method === 'POST' && req.path ==='/api/blog/update'){
        const result = updateBlog(id, req.body);
        if(result){
            return new SuccessModel();
        } else {
            return new ErrorModel('更新博客失敗');
        }
    };

    //刪除博客詳情
    if(method === 'POST' && req.path ==='/api/blog/del'){
       const result = delBolg(id);
       if(result){
        return new SuccessModel();
       } else {
            return new ErrorModel('刪除博客失敗');
       }
    };
}
module.exports = handleBlogRouter;