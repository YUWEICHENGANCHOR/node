//異步操作
const fs = require('fs');
const path = require('path');
//resolve拼接的方式，__dirname當前文件的目錄,nodejs 全局變量


/* //callback 方式獲取一個文件的內容
function getFileContent(fileName, callback){
    const fullFileName = path.resolve(__dirname, 'files', fileName);
    fs.readFile(fullFileName, (err, data) => {
    if(err) {
        console.error(err);
        return
    }
    //變成對象，json file
    callback(
        JSON.parse(data.toString())
        )
    })
}

//測試 callback-hell
getFileContent('a.json', aData => {
    console.log('a data', aData);
    //aData.next 是b.json
    getFileContent(aData.next, bData => {
        console.log('b data', bData);
        //bData.next 是c.json
        getFileContent(bData.next, cData => {
            console.log('c data', cData);
        })
    })
}) */

//用promise獲取文件內容
function getFileContent(fileName){
    const promise = new Promise((resolve, reject)=>{
        const fullFileName = path.resolve(__dirname, 'files', fileName);
        fs.readFile(fullFileName, (err, data) => {
        if(err) {
            reject(err);
            return
        }
        //變成對象，json file
        resolve(
            JSON.parse(data.toString())
            )
        })
    })
    return promise;
}
//.then 把a.json文件打印出來。getFileContent('a.json')是個promise對象,然後是.then也是個promise對象
//.then(aData => {
//    console.log('a.json', aData);
//    return getFileContent(aData.next);
//})
//是個對象
getFileContent('a.json').then(aData => {
    console.log('a.json', aData);
    //return 一個promise對象(getFileContent)
    return getFileContent(aData.next);
}).then(bData =>{
    console.log('b.json', bData);
    return getFileContent(bData.next);
}).then(cData => {
    console.log('c.json', cData);
})