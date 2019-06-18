'use strict';
const handleBlogRouter = (req, res) =>{
    const method = req.method; //GET POST
    const url = req.url;
    const path = url.split('?')[0];


    //獲取博客
    if(method === 'GET' && path === '/api/blog/list'){
        return {
            msg: 'Get Blog list interface'
        }
    };

    //獲取博客詳情
    if(method === 'GET' && path ==='/api/blog/detail'){
        return {
            msg: 'Get Blog detail interface'
        }
    };

    //新建博客詳情
    if(method === 'POST' && path ==='/api/blog/new'){
        return {
            msg: 'This is new blog interface'
        }
    };

    //更新博客詳情
    if(method === 'POST' && path ==='/api/blog/update'){
        return {
            msg: 'This is update blog interface'
        }
    };

    //刪除博客詳情
    if(method === 'POST' && path ==='/api/blog/del'){
        return {
            msg: 'This is delete blog interface'
        }
    };
}
module.exports = handleBlogRouter;