console.log('First');

process.nextTick(()=>{
 console.log('Third')
});

setTimeout(() => {
  console.log('Zero Seconds A');  
}, 0);

setTimeout(() => {
    console.log('Zero Seconds B');  
  }, 0);

console.log('Second');  