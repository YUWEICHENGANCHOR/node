'use strict'
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');



const serverHandle = (req, res) => {
    //  設置返回格式 JSON
    res.setHeader('Content-type', 'application/json');

    //處理blog 路由
    const blogData = handleBlogRouter(req, res);
    if(blogData) {
        res.end{
            JSON.stringify(blogData)
        }
        return;
    }
    const userData = handleUserRouter(req, res);
    if(userData) {
        res.end {
            JSON.stringify(userData)
        }
        return;
    }
    //  沒有命中路由，返回404
    res.writeHead(404, {"Content-type":"text/plain"});
    res.write("404 not found\n");
    res.end();
}

module.exports = serverHandle;