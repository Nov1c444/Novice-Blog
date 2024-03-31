const fs = require('fs');
const path = require('path');

// 指定要修改的目录
const directory = './AIGC';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  let count = 1;
  files.forEach(file => {
    const oldPath = path.join(directory, file);
    const extension = path.extname(file);
    const newPath = path.join(directory, file.split(" ")[0] + ".mdx");

    fs.rename(oldPath, newPath, (err) => {
      if (err) throw err;
    });

    count++;
  });
});