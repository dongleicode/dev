//文件绝对路径
console.log('__filename', __filename)
//__filename D:\work\node\node基础\class01\02-__filename.js


//当前文件所在的目录的绝对路径
console.log('__dirname', __dirname)
//__dirname D:\work\node\node基础\class01

//命令行的根路径
console.log('process.cwd()',process.cwd());

//环境变量：测试/开发/生产环境 NODE_ENV 
console.log('process.env', process.env)
//C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;D:\\install\\Git\\cmd;C:\\Program Files (x86)\\Git\\cmd;D:\\install\\nvm;D:\\install\\nvm\\nodejs;D:\\nodejs\\node_global\\node_modules\\yarn\\bin;D:\\nodejs\\node_global;;D:\\install\\微信web开发者工具\\dll;D:\\install\\Microsoft VS Code\\bin

//npm cross-env 设置不同的环境变量