import repl from 'repl'

let repl_context = repl.start({
    prompt: '>',
    input: process.stdin,
    output: process.stdout
}).context;

//타이밍이 아주 중요한 함수

function foo() {
    1
    console.log('hello world');
}
repl_context.foo = foo;