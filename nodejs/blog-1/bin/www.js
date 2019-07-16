//Create Server用 沒有跟業務邏輯有關
const http = require('http');

const PORT = 8000;
const serverHandle = require('../app');

const server = http.createServer(serverHandle);

server.listen(PORT);
