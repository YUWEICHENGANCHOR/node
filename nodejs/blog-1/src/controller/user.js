const loginCheck = (username, password) =>{
    //先使用假數據
    if(username === 'zhangsan' && password === '123'){
        return true; 
    } else {
        return false;
    }
}
module.exports = {
    loginCheck
}