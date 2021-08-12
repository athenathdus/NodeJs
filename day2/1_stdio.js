process.stdin.resume() //keyboard
process.stdin.setEncoding('utf-8')
const { exit } = require('process');
const util = require('util')

process.stdin.on('data', function (text) {
    console.log(`echo: ${text}`);
    console.log(`echo: ` + text);

    if (text === 'exit\r\n') { // === : 일치 연산자, 두 피연산자가 엄격히 같은지 판별
        process.exit()
    }
})

//process.stdin
//process.stdout
//process.exit
//안되면 앞에 \r 붙여보기 
//기본 입출력 -> 루프(x) -> 비동기코드