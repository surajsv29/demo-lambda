console.log('start');

const poorFunction = ()=>{
    console.log('Say Hello to poor function :(');
}

const richFunction = callback => {
    console.log('I am rich function. See poorFunc below me');
    callback();// We are simply executing the function here.
    console.log('This time I am below poor function')
}

richFunction(poorFunction);

console.log('end');