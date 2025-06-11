const express = require('express');
const mysql = require('mysql');
const cors= require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'react_demo'
});

db.connect((err)=> {
    if (err){
        console.error('Database connection failed:',err);
        return;
    }
    console.log('connected to mysql'); 
    
});

app.get('/users',(req,res)=>{
    db.query('select * from users',(err, results)=> {
        if (err){
            console.error('Error fetching users',err);
            res.status(500).send('error fetching users');
            return;
        }
        res.json(results);
        
    });
});

app.listen(PORT , () =>{
    console.log('server running at http://localhost:${PORT}');
});

