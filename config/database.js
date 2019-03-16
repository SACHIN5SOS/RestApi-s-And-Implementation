if(process.env.NODE_ENV === 'production'){
    module.exports={
        mongoURI:'mongodb://sachin:sachin1@ds151207.mlab.com:51207/team7-prod'
    }
}else{
        module.exports={mongoURI:'mongodb://localhost:27017/BankApp'}
    }