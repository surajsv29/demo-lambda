//This is an advanced functionality of using promises. 
// Always returns a "promise". Makes the code more readable.
//function starts with the term "async"

//Consider a movie ticket examply where the 3 man at no. 3 wants to wait in the queue for his wife to bring the ticket.

console.log('Person 1 : Here is my ticket');
console.log('Person 2 : Here is my ticket');


console.log('Person 3 : Waiting for my wife to bring the ticket');


const wifeIsBringingTicket = new Promise((resolve)=>{
    resolve(
    console.log('I am hungry, want popcorn')
    )
})

const getPopcorn = new Promise((resolve)=>{
     resolve(console.log('Here is your popcorn'));
})

const getButter = new Promise((resolve)=>{
    resolve(console.log('He is the butter'));
    
});

const getTicket = new Promise((resolve)=>{
    console.log('Here i our ticket honey')
})

wifeIsBringingTicket.then((ticket)=>{
    console.log('Wife : Get me the popcorn too')
    return getPopcorn
}
).then((popcorn)=>{
    console.log(popcorn)
    console.log('I need butter in popcorn')
    return getButter
}).then((butter)=>{
    console.log(butter)
    return getTicket
}).then((ticket)=>{
    console.log(ticket)
})

console.log('Person 4 : Here is my ticket');
console.log('Person 5 : Here is my ticket');
