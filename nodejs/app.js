'use strict'
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res)=>{
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];
    const query = querystring.parse(url.split('?')[1]);

    //設置返回格式為JSON
    res.setHeader('Content-type','application/json');

    const resData = {
        method,
        url,
        path,
        query
    }
    //返回
    if(method === 'GET'){
        res.end(
            JSON.stringify(resData)
        )
    }
    if(method === 'POST'){
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
            req.on('end', () => {
                resData.postData = postData;
                //把處理完的postData賦予值給resData
                res.end(
                    JSON.stringify(resData)
                )
            });
        });
        
    }
});

server.listen(3000);
console.log('ok');