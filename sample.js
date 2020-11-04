// 함수의 4종류

// 1. 인자(Argument, Parameter, 인수) O, Return X
function sampleFunc(a, b){
    console.log(a)
    console.log(b)
}

const arrowFunc = (a,b)=>{
    console.log(a)
    console.log(b)
}


// const a = sampleFunc(1, 2)
// console.log(a)

// 2. 인자 X, Return X
function sampleFunc2(){
    console.log("HEllo World")
}
// sampleFunc2()

const arrowFunc2 = ()=>{
    console.log("Hello World")
}

// 3. 인자 X, Return  O
function sampleFunc3(){
    return "Hi"
}
// const a = sampleFunc3();
// console.log(a)
// console.log("Bye")

// 4. 인자 O, Return(OutPut) 0
function sampleFunc4(a, b){
    return a*b
}
const arrowFunc4 = (a, b)=>{
    return a*b
}
const arrowFunc5 = (a, b)=>(a*b)

const a = arrowFunc5(3,3)
// console.log(a)

const c = ((a,b)=>(a/b))(3,3)
console.log(c)
// const a = sampleFunc4(5,2);
// console.log(a)

