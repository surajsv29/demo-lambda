console.log('start');

const poorFunction = ()=>{
    console.log('Say Hello to poor function :(');
}

setTimeout(()=>{
    console.log('In timeout');
},2000)
//So this generally says, the mechanism of timeout function, that you give to parameters :
// 1. CallBack function :- "whatever" you wanna do. Obviously, this function might be calling somehwere in tiemout code as -- callback();
// 2. Time(ms) : After what time you wanna do that "whatever."

const richFunction = callback => {
    console.log('I am rich function. See poorFunc below me');
    callback();// We are simply executing the function here.
    console.log('This time I am below poor function')
}

richFunction(poorFunction);

console.log('end');