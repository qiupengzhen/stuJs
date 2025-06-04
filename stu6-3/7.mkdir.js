const fl = require('fs');
// fl.mkdir('./html', (err) => {
//   if (err) {
//     console.error('创建目录失败:', err);
//   } else {
//     console.log('目录创建成功');
//   }
// });

fl.readdir('./html', (err, files) => {
  if (err) {
    console.error('读取目录失败:', err);
  } else {
    console.log('目录内容:', files);
  }
});
