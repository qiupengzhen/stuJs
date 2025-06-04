const fl = require('fs');
// fl.rename('./静夜思.txt', './李白.txt', (err) => {
//   if (err) {
//     console.error('Error renaming file:', err);
//   } else {
//     console.log('文件重命名成功');
//   }
// });
// 该代码使用 Node.js 的 fs 模块来重命名文件

// fl.rename('./李白.txt', './资料/静夜思.txt', (err) => {
//   if (err) {
//     console.error('Error renaming file:', err);
//   } else {
//     console.log('文件重命名成功');
//   }
// });

fl.rename('./1. draggable.html', './html/1. draggable.html', (err) => {
  if (err) {
    console.error('Error renaming file:', err);
  } else {
    console.log('文件移动成功');
  }
});