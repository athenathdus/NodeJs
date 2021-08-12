function f1() {
    console.log("hello");
}

function f2() {
    console.log("es6")
}

var data = 7;

function foo() {
    return {
        data: data,
        foo1: f1,
        foo2: f2
    }
}

export default foo;