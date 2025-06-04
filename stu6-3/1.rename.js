const fl = require('fs');

let fls = fl.readdirSync('./code')
//
fls.forEach(item => {
  let date = item.split('.');
  let [num, names] = date
  if (Number(num) <= 10) {
    num = '0' + num;
  }
  let newName = num + '.' + names;
  console.log(item);

  fl.renameSync(`./code/${item}`, `./code/${newName}.js`);

})