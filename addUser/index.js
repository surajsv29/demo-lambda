const sql = require('mysql')
exports.handler = (event, context, callback)=>{
const connection = sql.createConnection({
    host: 'ch-buyogo-rds-ch-dev1-rdscluster-1dmi9tf2dmuce.cluster-ctgjyfgcje6u.eu-central-1.rds.amazonaws.com',
    user: 'masteruser',
    password : '1XwStHpav01mVUeWnoYqC469SeIlMWxAuQ2',
    database: 'buyogo'
})

connection.connect()

 connection.query('insert into demoUser values(?, ?, ?)',[event.body.id,event.body.fName,event.body.lName],(error, results,field)=>{
            if(!error){
            callback(null, {"statusCode": 200, "body": JSON.stringify(results)})
            connection.end()
            }
            else{
            callback(error,null)
            connection.end()
            }
        })
}