import fs from 'fs'

fs.writeFileSync(
    'text2.txt',
    'hello',
    {
        encoding: 'utf-8'
    }
);

console.log('done')

//순서대로 (동기)