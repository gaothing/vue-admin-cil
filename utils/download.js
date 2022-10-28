import download from 'download-git-repo';
import ora from 'ora';
import fs from 'fs';

import chalk from 'chalk';// 用于改变文字颜色
export default function (remote, name, path) {
    const downSpinner = ora('正在下载模板...').start();
    return new Promise((resolve, reject) => {
        download(remote, name, {clone:true}, err => {
            if (err) {
                downSpinner.fail();
                console.log(chalk.red(err));
                fs.rmdirSync(path);
                reject(err);
                return;

            };
            downSpinner.succeed(chalk.green('模板下载成功！'));
            resolve();
        });
    });
  };