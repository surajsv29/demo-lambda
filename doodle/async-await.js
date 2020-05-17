// //This is an advanced functionality of using promises. 
// // Always returns a "promise". Makes the code more readable.
// //function starts with the term "async"

// //Consider a movie ticket examply where the 3 man at no. 3 wants to wait in the queue for his wife to bring the ticket.

// console.log('Person 1 : Here is my ticket');
// console.log('Person 2 : Here is my ticket');


// console.log('Person 3 : Waiting for my wife to bring the ticket');


// const wifeIsBringingTicket = new Promise((resolve)=>{
//         // setTimeout(()=>{
//         //     resolve('My TICKET')
//         // },3000)
//         resolve('My TICKET')
// })

// const getPopCorn = wifeIsBringingTicket.then((ticket)=>{
//     console.log('h : Can we go in ?')
//     console.log('w : No i am hungry')
//     return new Promise((resolve)=> resolve(`Popcorn & ${ticket}`))
// })

// const getButter = getPopCorn.then((tandP)=>{
//     console.log('h :You got popcorn now, Let us go.')
//     console.log('w: No I want butter in it.')
//     return new Promise((resolve)=> resolve(`${tandP} wih butter`))
// })

// getButter.then((tPandB)=>{
//     console.log('H : Can we please go now, you have popcorn with butter')
//     console.log('W : Yes, we already got too late.')
//     console.log('Hey Man,that is our tickets')
//     console.log(`Man goes in with ${tPandB}`)
// })

// console.log('Person 4 : Here is my ticket');
// console.log('Person 5 : Here is my ticket');


// How can the above code be more readable using Async-Await



console.log('P1: Shows Ticket');
console.log('P2: Shows Ticket');




console.log('P3: I am waiting for my wife to get the tickets.');

const waitingForWife = async()=>{

    const waitingForTicket = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('#TICKET#'),3000);
    });

    const getPopCorn = new Promise((resolve)=>resolve('#Pop-Corn#'));
    const getButter = new Promise((resolve)=>resolve('#Butter#'))

    let ticket = await waitingForTicket;

    console.log('h : Can we go in ?');
    console.log('w : No i am hungry');
    
    let popcorn = await getPopCorn;

    console.log(`h :You got ${popcorn} now, Let us go.`)
    console.log('w: No I want butter in it.')
 
    let butter = await getButter;

    console.log(`H : Can we please go now, you have ${popcorn} with ${butter}`)
    console.log('W : Yes, we already got too late.')

    return ticket;
}; 
    waitingForWife().then((ticket)=>console.log(`P3: Hey Man, Here you go--${ticket}`))

        
// console.log(`P3: Hey Man, Here you go--${waitingForWife()}`)
console.log('P4: Shows Ticket');
console.log('P5: Shows Ticket');