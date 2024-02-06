const express=require('express')
const Productcontrollars=require('./controllar')
const route =express.Router()

route.post('/addProduct',Productcontrollars.addProduct)

route.get('/finddata',Productcontrollars.getdata)

route.put('/updateProduct/:Pname',Productcontrollars.updatedata)

route.delete('/deleteProduct/:Pname',Productcontrollars.deleteProduct)

route.post('/login',Productcontrollars.login)

route.post('/adduser',Productcontrollars.addUser)


module.exports=route