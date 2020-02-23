const mysql = require('mysql');

//創建對象
const con = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'myblog'

})

//開始連接
con.connect();

//執行ｓｑｌ語句
const sql = `insert into blogs(title, content, createtime, author)values('標題c','內容c',1575402482292,'張三'); `

con.query(sql, (err, result) => {
    if(err){
        console.error(err);
        return;
    }

    console.log(result);
});

//關閉
con.end();