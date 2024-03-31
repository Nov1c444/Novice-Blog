const fs = require('fs');
const path = require('path');

// 指定要修改的目录
const directory = './AIGC';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  let count = 1;
  files.forEach(file => {
    const filePath = path.join(directory, file);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      const year = Number(file.split("——")[1].split("-")[0]) <= "410"  ? "2024": "2023"
      const title = `${year}年 AIGC周报 ${file}`
      const date = `${year}-${file.split("——")[1].slice(0,2)}-${file.split("——")[1].slice(2,4)}`
      const prependText = `---
title: ${title}
date: ${date}
tags: ['AIGC周报']
draft: false
summary: ${title}
---
`;
      const newData = prependText + data;

      fs.writeFile(filePath, newData, 'utf8', (err) => {
        if (err) throw err;
      });
    });

    count++;
  });
});