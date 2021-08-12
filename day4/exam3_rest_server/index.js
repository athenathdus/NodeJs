import http from 'http'
import { url } from 'inspector';
import { URL } from 'url'

const port = 8090

http.createServer((req, res) => {
    const urlObj = new URL(
        req.url,
        'http://example.com'
    );

    console.log(`pathname : ${urlObj.pathname}`);
    console.log(`search : ${urlObj.search}`);
    console.log(`hostname : ${urlObj.hostname}`);

    let result = {
        r: 'ok'
    }

    let header = {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '1000',
        "Access-Control-Allow-Headers": "*" //CORS 정책 허용  * 는 모두 허용 
    }
    res.writeHead(200, header);


    if (urlObj.pathname === '/echo')  //echo 요청 처리
    {
        let _title = urlObj.searchParams.get('title');
        let _msg = urlObj.searchParams.get('msg');

        result.title = _title
        result.msg = _msg
    }
    else if (urlObj.pathname === '/sum') {
        let a = parseInt(urlObj.searchParams.get('a'));
        let b = parseInt(urlObj.searchParams.get('b'));
        result.cal = a + b
    }
    else if (urlObj.pathname === '/sub') {
        let a = parseInt(urlObj.searchParams.get('a'));
        let b = parseInt(urlObj.searchParams.get('b'));
        result.cal = a - b
    }
    else if (urlObj.pathname === '/avg') {
        let a = parseInt(urlObj.searchParams.get('a'));
        let b = parseInt(urlObj.searchParams.get('b'));
        let c = parseInt(urlObj.searchParams.get('c'));
        let d = parseInt(urlObj.searchParams.get('d'));
        let e = parseInt(urlObj.searchParams.get('e'));
        result.cal = (a + b + c + d + e) / 5
    }
    //switch case , api가 많을경우

    res.end(JSON.stringify(result));

}).listen(port);

console.log(`listen : ${port}`);


//curl) curl -i -X GET -d “a=1&b=2” -G http://localhost:8090/sum
//test.http로 하는법) 같은거 복붙하고 값 넣어주기
