//__dirname是静态的
//cwd是动态的，根据进程走
console.log(process.cwd()) //进程启动的目录

console.log(process.env)//打印环境变量

console.log(process.argv)
//第一个是运行node的程序在哪
//第二个是执行的文件的文件目录