const sql = require('mysql')
//Comment adding
exports.handler = async (event)=>{
const connection = sql.createConnection({
    host: 'ch-buyogo-rds-ch-dev1-rdscluster-1dmi9tf2dmuce.cluster-ctgjyfgcje6u.eu-central-1.rds.amazonaws.com',
    user: 'masteruser',
    password : '1XwStHpav01mVUeWnoYqC469SeIlMWxAuQ2',
    database: 'buyogo'
})

connection.connect()

const promise = new Promise((resolve,reject)=>{
    connection.query('insert into demoUser values(?, ?, ?)',[event.body.id,event.body.fName,event.body.lName],(error, results,field)=>{
        if(!error){
        resolve({"statusCode": 200, "body": JSON.stringify(results)})
        connection.end()
        }
        else{
        reject(error)
        connection.end()
        }
    })
}) 
return promise;
}