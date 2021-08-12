const fs = require('fs')
const dest = fs.createWriteStream('out.txt')
const src = process.stdin
src.pipe(dest);

//file system ->file io
//createWriteStream
//createReadStream
//종료는 ctrl + Z 라고 하지만 나는 ctrl +C