#!/usr/bin/env node
import prompts from 'prompts';
import fs from 'fs';
import download from "./utils/download.js";
const root = process.cwd();
//查看版本号
const inputList = [
  {
    type: 'text',
    name: 'projectName',
    message:"请输入项目名称"
  },{
    type: 'text',
    name: 'author',
    message:"请输入作者"
  }
];
(async () => {
  const { projectName } = await prompts(inputList);
  fs.mkdirSync(root + '/' + projectName);
  await download('direct:https://github.com/gaothing/gitdemo.git', projectName, {});
  console.log(`🎈🎈🎈 文件夹构建成功`)
})();