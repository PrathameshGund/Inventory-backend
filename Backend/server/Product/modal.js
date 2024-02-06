const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    Pname:String,
    price:Number,
    quantity:Number,
    total:Number
})

module.exports=mongoose.model('Productinfo',studentSchema)

// const LoginSchema = mongoose.Schema({
//     Username:String,
//     password:Number,

// })

// module.exports=mongoose.model('Login',LoginSchema)