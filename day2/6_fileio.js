import fs from 'fs'

//동기
let data = fs.readFileSync(
    'text.txt',
    {
        encoding: 'utf-8'
    }
);

console.log(data);

//비동기
fs.readFile(
    'text.txt',
    {
        encoding: 'utf-8'
    },
    function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('ok');
            console.log(data)
        }
    }
);

