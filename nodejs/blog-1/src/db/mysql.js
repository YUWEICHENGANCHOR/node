const mysql = require('mysql');
const { MYSQL_CONF} = require('../conf/db');


//創建
const con = mysql.createConnection(MYSQL_CONF);

//開始連接
con.connect();


//統一執行sql的函數
function exec(sql){
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if(err) {
                console.err(err);
                return;
            }
            console.log(result);
        })
    })
    return promise;
}

module.exports = {
    exec
}