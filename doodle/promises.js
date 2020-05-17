//Simply understand it as the real world promise. If you promise to do something you do two things :
// 1. Either you resolve it,
// 2. Or you reject or do not resolve it.
// Decision is taken when you call that promise. Simply if the promise is resolved - ".then(whatever_is_in_resolve)"
// or not resolved -- "catch(whatever_is_in_reject)"

// let roomCleaningPromise = new Promise((resolve, reject) => { // promise has been created with conditions of resolve and reject
//     let isClean = false;
//     if (isClean) {
//         resolve('OK, Cleaned..Happy ??');
//     }
//     else {
//         reject('Sorry, did not clean it');
//     }
// })
let roomCleaning = ()=>{
return new Promise((resolve, reject) => {
    resolve('OK, Cleaned..Happy ??');

})
}

// roomCleaningPromise.then((somethingFromResolve)=>{ // This then function would wait for promise to be fininshed
//     console.log(somethingFromResolve);             // and only "then" it do something 
// }).catch((somethingFromReject)=>{
//     console.log(somethingFromReject);
// })


let garbageCollected = (message) => {
    return new Promise((resolve, reject) => {
        resolve(message+'Garbage Done');
    })
};

let winIcecream = (message) => {
    return new Promise((resolve, reject) => {
        resolve(message +'won icecream');
    })
};

roomCleaning().then((resolveResult) => {
   return garbageCollected(resolveResult);
}).then((resolveResult) => {
    return winIcecream(resolveResult);
}).then((resolveResult) => {
    console.log('finished ${resolveResult}');
})

