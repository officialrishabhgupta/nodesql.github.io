const mysqlConnection = require('../model/connection');

const getOrders =(_req,res)=>{
    mysqlConnection.query('SELECT * FROM test.orders', (err,rows, _fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
};

const getOrder =(req,res)=>{
    mysqlConnection.query('SELECT * FROM test.orders WHERE OrderDetailID=?',[req.params.id], (err,rows, _fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
};

const deleteOrders =(req,res)=>{
    mysqlConnection.query('DELETE FROM test.orders WHERE OrderDetailID=?',[req.params.id], (err,_rows, _fields)=>{
        if(!err){
            res.send('Deleted Successfully');
        }
        else{
            console.log(err);
        }
    })
};

const postOrders =(req,res)=>{
    let ord = req.body;
    var sql = "SET @OrderDetailID =?;SET @OrderID=?;SET @ProductID=?;SET @Quantity=?;\
    CALL UserProcedure(@OrderDetailID,@OrderID,@ProductID,@Quantity);";
    mysqlConnection.query(sql,[ord.OrderDetailID,ord.OrderID,ord.ProductID,ord.Quantity],(err,rows, _fields)=>{
        if(!err){
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted order detail id: '+ element[0].OrderDetailID);
            });
        }
        else{
            console.log(err);
        }
    })
};

const putOrders =(req,res)=>{
    let ord = req.body;
    var sql = "SET @OrderDetailID =?;SET @OrderID=?;SET @ProductID=?;SET @Quantity=?;\
    CALL UserProcedure(@OrderDetailID,@OrderID,@ProductID,@Quantity);";
    mysqlConnection.query(sql,[ord.OrderDetailID,ord.OrderID,ord.ProductID,ord.Quantity],(err,rows, _fields)=>{
        if(!err)
        res.send('Updated Successfully');
        else{
            console.log(err);
        }
    })
};

module.exports ={
    getOrders,
    getOrder,
    deleteOrders,
    postOrders,
    putOrders
}