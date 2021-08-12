import fs from "fs";
fs.writeFile(
    'text.txt', //파일이름
    'hello2',  //데이터
    {
        encoding: 'utf-8'
    },
    function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('ok');
        }
    }
);

console.log('done')

//비동기, done이 먼저 출력되고 그 다음 ok가 출력됨