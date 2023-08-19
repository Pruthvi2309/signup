const express = require('express');
const app = express();
const cors = require('cors');
const con = require('./conn');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.get("/retrive", (req, res) => {
    con.query("SELECT * FROM login", (err, result) => {
        if (err) {
            res.send("table connection error")
            } else {
                res.send(result)
                }
            })
        });


app.post("/Signin", (req, res) => {
    const data = req.body;
    con.query("INSERT INTO login SET?",data,(error,result)=>{
        if(error)
        {
            res.send("error in connection api")
        }
        else
        {
            res.send(result)
        }
    })
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})