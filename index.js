const con=require('./connection');
const express=require('express');
var app=express();
var bodyparse=require('body-parser');
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/form.html');
});

app.post('/',function(req,res){
var name=req.body.name;
var email=req.body.email;
var phone=req.body.phone;
con.connect(function(error){
if(error) throw error;
var sql="INSERT INTO student(name,email,phone)VALUES('"+name+"','"+email+"','"+phone+"')";
con.query(sql,function(error,result){
    if(error) throw error;
    res.send('Student Registewr succesfully'+result.insertId);
})
});
});

app.listen(7000);