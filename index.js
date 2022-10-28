#!/usr/bin/env node

import prompts from 'prompts';
import fs from 'fs';
import download from "./utils/download.js";
import chalk from 'chalk';// 用于改变文字颜色
const root = process.cwd();
//查看版本号
const inputList = [
  {
    type: 'text',
    name: 'projectName',
    message:"请输入项目名称"
  },
  {
    type: 'select',
    name: 'projectType',
    message: '请选择项目类型',
    choices: [
      { title: 'admin', value: 'http://gitlab.wangxiao.cn:9090/YGZT/wangxiao-open-web.git' },
      { title: 'h5', value: 'http://gitlab.wangxiao.cn:9090/YGZT/wangxiao-h5-cli.git' },
      { title: 'doc', value: 'http://gitlab.wangxiao.cn:9090/gaoyanpeng/wangxiao-project-doc.git' },
    ],
  },{
    type: 'text',
    name: 'username',
    message:"请输入用户名"
  }, {
    type: 'password',
    name: 'password',
    message:"请输入密码"
  }
];
(async () => {
  const { projectName, username, password,projectType } = await prompts(inputList);
  if (username === 'zdwx' && password === 'zdwx123') {
    const path = root + '/' + projectName;
    fs.mkdirSync(path);
    await download(`direct:${projectType}`, projectName, path);
    // const data = fs.readFileSync(path + '/package.json');
    // console.log(Buffer.from(data));
    console.log(`
        🎈🎈🎈 项目构建完成

        ${chalk.green('cd'+' '+projectName)}
        ${chalk.green('npm install')}
        ${chalk.green('npm run dev')}
    `)
  } else {
    console.log(chalk.red(`error`),'用户名或密码错误')
  }

})();