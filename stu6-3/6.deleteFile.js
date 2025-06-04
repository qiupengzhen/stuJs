const fl = require('fs');

fl.rm('./stu6-3-copy.txt', (err) => {
  if (err) {
    console.error('删除文件失败:', err);
  } else {
    console.log('文件删除成功');
  }
});