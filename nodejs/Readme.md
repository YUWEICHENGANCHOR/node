`1. How to run this project? 

In blog-1 npm run dev`

Build 
My SQL data 

use myblog;

-- show tables;

-- insert into users (username, `password`, realname)values('lisi', '123','李四');

-- select * from users;

-- select id, username from users;

-- select * from users where username like '%zhan%';

-- select * from users where `password` order by id desc;

-- update users set realname ='李四 ２' where username = 'lisi'; 

-- select * from users;

-- delete from users where username = 'lisi';

-- select * from users where state = 1;
-- update users set state = '1' where username='lisi';


-- insert into blogs(title, content, createtime, author)values('標題B','內容B',1575400433953,'李四');
-- select * from users;
-- select * from blogs;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';