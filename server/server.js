const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {BankApp} = require('./models/bankapp');


const app = express();

const port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    next();
    
});


app.post('/bankapp',(req,res)=>{
    const newbankapp = new BankApp({
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        zipCode:req.body.zipCode,
        ssn:req.body.ssn,
        creditCardNo:req.body.creditCardNo,
        passkey:req.body.passkey
    })

    newbankapp.save().then((data)=>{
        res.send(data);
    },(err)=>{
        res.status(404).send(e);
    })
});

app.get('/bankapp',(req,res)=>{
    BankApp.find().then((bankapp)=>{
        res.send({bankapp});
    },(err)=>{
        res.status(404).send(e);
    })
});

app.get('/bankapp/:id',(req,res)=>{
    const id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    BankApp.findById(id).then((bankapp)=>{
        if(!bankapp){
            req.status(404).send();
        }
        res.send({bankapp});
    }).catch((e)=>{
        res.status(404).send();
    })
});

app.listen(port,()=>{
    console.log(`Started at ${port}`);
})