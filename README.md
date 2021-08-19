# NodeJs

## 개발환경 준비
```sh
npm run dev
npm i express dotenv
npm i -D cross-env nodemon
```

## 실행법
```
npm start
```

## mongodb
```
npm init
npm i mongodb dotenv
npm i -D cross-env nodemon
npm i express
```

## package.json 가서
```
"type":"module"
[script]
 "dev": "cross-env NODE_ENV=dev nodemon index",
 "start": "cross-env NODE_ENV=product node index",
 ```

 ## .env 파일 만들고 붙여넣기
 ```
 MONGODB_URL=mongodb+srv://athenathdus:<OkbALAwBhRXOiGJo>@cluster0.q8yvk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=8080
```

## 실행은 npm run dev 