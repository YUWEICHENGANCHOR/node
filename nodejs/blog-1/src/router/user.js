'use strict';

const { loginCheck } = require('../controller/user').default;
const { SuccessModel, ErrorModel } = require('../model/resModel');
var a = 0;


const handleUserRouter = (req, res) => {
    const method = req.method;//GET POST
    //登入
    if(method === 'POST' && req.path ==='/api/user/login'){
        const {username, password} = req.body;
        const result = loginCheck(username, password)
        if(result){
            return new SuccessModel();
        } else {
            return new ErrorModel('Login fail');
        }
    };
}

module.exports = handleUserRouter;