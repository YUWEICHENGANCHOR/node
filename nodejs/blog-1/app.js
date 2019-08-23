'use strict';
const querystring = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

//使用promise處理post data

const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        //若不是空
        if(req.method !== 'POST'){
            //返回空對象
            resolve({});
            return;
        }
        //是POST，若不是就忽略post data
        if(req.headers['content-type'] !== 'application/json'){
            resolve({});
            return 
        }
        
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
        })
        req.on('end', ()=>{
            if(!postData){
                resolve({});
                return;
            } else {
                resolve(JSON.parse(postData));
            }
            
        })

    })
    return promise;
}

const serverHandle = (req, res) => {
    //  設置返回格式 JSON
    res.setHeader('Content-type', 'application/json');

    //獲取path
    const url = req.url;
    req.path = url.split('?')[0];

    //解析query
    req.query = querystring.parse(url.split('?'[0]));

    //處理post data
    getPostData(req).then(postData =>{
        req.body = postData
        
        const blogData = handleBlogRouter(req, res);
        if(blogData) {
            //返回字數串，但返回的是對像，所以要轉成字數串
            res.end(JSON.stringify(blogData));
            return;
        }

        const userData = handleUserRouter(req, res);
        if(userData) {
            res.end(JSON.stringify(userData));
            return;
        }

        //  沒有命中路由，返回404
        res.writeHead(404, {"Content-type": "text/plain"});
        res.write("404 not found\n");
        res.end();
    });

    //處理 blog 路由
    
}

module.exports = serverHandle;