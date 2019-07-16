'use strict';
const handleUserRouter = (req, res) => {
    const method = req.method;//GET POST
    //登入
    if(method === 'POST' && req.path ==='/api/user/login'){
        return {
            msg: 'This is login interface'
        }
    };
}

module.exports = handleUserRouter;