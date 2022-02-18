const mysqlConnection = require('../model/connection');



const getUsers = (_req,res)=>{
    mysqlConnection.query('SELECT * FROM test.users', (err,rows, _fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
};

const getUser =(req,res)=>{
    mysqlConnection.query('SELECT * FROM test.users WHERE PersonID=?',[req.params.id], (err,rows, _fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
};

module.exports = {
    getUsers,
    getUser
};