const {Client} = require('pg')

const client = new Client ({
    host: "localhost",
    user: "user",
    port: 5432,
    password: "test1234",
    database: "user"

})
client.connect();
client.query('Select * from blogbucket', (err,res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})

