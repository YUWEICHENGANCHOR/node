'use strict';
const handleUserRouter = (req, res) => {
    const method = req.method;//GET POST
    const url = req.url;
    const path = url.split('?')[0];

    //登入
    if(method === 'POST' && path ==='/api/user/login'){
        return {
            msg: 'This is login interface'
        }
    };
}

module.exports = handleUserRouter;