// 文件复制
// 使用 Node.js 的 fs 模块来复制文件
// 通过流的方式读取和写入文件

const fl = require('fs');
let wr = fl.createReadStream('./stu6-3.txt')
let ws = fl.createWriteStream('./stu6-3-copy.txt')
wr.on('data', (chunk) => {
  console.log('读取到数据块:', chunk);
  ws.write(chunk);
});