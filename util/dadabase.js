const mysql=require('mysql')

const pool=mysql.createPool({
     host:'localhost',
     user:'root',
     database:'node-sql',
     password:'Deepak@123'

})
module.exports=pool.promise()