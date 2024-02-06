const Inventorymodal=require('./modal')
// const Loginmodal=require('./Loginmodal')
const addProduct=async (req,res)=>{
    const{Pname,price,quantity,total}=req.body
try{
    const data=new Inventorymodal({
        Pname,price,quantity,total
    })
    const Productdata=await data.save()
    res.send({Productdata})
}
catch(err){
    res.send(err)
}
}

const getdata=async(req,res)=>{
try{
    const data=await Inventorymodal.find()
    res.status(200).send({data})
}
catch(err){
    console.log(err);
    res.status(400).send(err)
}
}




const updatedata = async (req, res) => {
    const { Pname } = req.params;
    const { price, quantity, total } = req.body;

    try {
        const data = await Inventorymodal.updateOne(
            { Pname: Pname },
            { $set: { price, quantity, total } }
        );

        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "Updated successfully" });
        } else {
            res.status(201).send({ msg: "Not updated successfully" });
        }
    } catch (err) {
        res.status(400).send(err);
    }
};


const deleteProduct=async(req,res)=>{

    try{
        const data=await Inventorymodal.deleteOne({Pname:req.params.Pname});
        if(data.deletedCount>0){
            res.status(200).send({msg:"Product deleted successfully"})
        }
        else {
            res.status(404).send({ msg: "Product not found or not deleted successfully" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }

};

const login = async (req, res) => {
    try {
        const { Username } = req.body;
        const user = await Loginmodal.findOne({ Username }); 
        
        if (!user) {
            res.status(401).send({ msg: "User not found" });
        } else {
            res.status(200).send({ msg: "Login successful" }); 
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

const addUser=async (req,res)=>{
    const{Username,password}=req.body
try{
    const data=new Loginmodal({
        Username,password
    })
    const Userdata=await data.save()
    res.send({Userdata})

}
catch(err){
    res.send(err)
}
};

module.exports={addProduct,getdata,updatedata,deleteProduct,login,addUser}




