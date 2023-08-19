const mysql = require ('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})
con.connect((err) => {
    if (err){
        console.log("connection error",err);
    }else{
        console.log("connection successful");
    }
})

module.exports = con;