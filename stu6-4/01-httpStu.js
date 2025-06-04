//导入http模块
const http = require('http');
//创建服务器
const server = http.createServer((req, res) => {
  //设置响应头
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  //发送响应数据
  res.end('我是你爸爸\n');
  //输出请求的URL
  console.log(`请求的URL: ${req.url}`);
  //输出请求的方法
  console.log(`请求的方法: ${req.method}`);
});
//监听端口
server.listen(9000, () => {
  console.log('Server is running at http://localhost:9000/');
});