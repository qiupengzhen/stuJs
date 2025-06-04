const fl = require('fs');

// fl.writeFile('./stu6-3.txt', 'Hello, World!', (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//   } else {
//     console.log('写入成功');
//   }
// });

// fl.appendFile('./stu6-3.txt', '\r\nnode.js stu day1', (err) => {
//   if (err) {
//     console.error('Error appending file:', err);
//   } else {
//     console.log('追加成功');
//   }
// });

// 流式写入
const ws = fl.createWriteStream('./静夜思.txt')
ws.write('床前明月光，\r\n');
ws.write('疑是地上霜。\r\n');
ws.write('举头望明月，\r\n');
ws.write('低头思故乡。\r\n');
ws.end(() => {
  console.log('流式写入完成');
});
