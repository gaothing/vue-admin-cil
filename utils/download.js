import download from 'download-git-repo';
import ora from 'ora';

// const symbols = require('log-symbols');  // 用于输出图标
import chalk from 'chalk';
// const chalk = require('chalk'); // 用于改变文字颜色
export default function (remote, name, option) {
    const downSpinner = ora('正在下载模板...').start();
    return new Promise((resolve, reject) => {
        download(remote, name, {clone:true}, err => {
            if (err) {
                downSpinner.fail();
                console.log(chalk.red(err));
                reject(err);
                return;
            };
            downSpinner.succeed(chalk.green('模板下载成功！'));
            resolve();
        });
    });
  };