const exp=require("express")
const landApp=exp.Router()

//import express-async-handler
const expressAsyncHandler=require("express-async-handler")

//import multerObj
const multerObj=require("./middlewares/CloudinaryConfig")

//import //bcryptjs module
const bryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
const verifyToken=require("./middlewares/verifyToken")

landApp.use(exp.json())

  
landApp.post('/land-register',multerObj.single('photo1'),expressAsyncHandler(async (request,response)=>{
   //get user collection
   const landcollectionObj=request.app.get("landcollectionObj")
  //get new user
  const newUser=JSON.parse(request.body.details);
  //check for duplicate user by username
   
   newUser.image=request.file.path;

 
    await  landcollectionObj.insertOne(newUser)
    response.status(201).send({message:"user created"});
     
 
  
})
);


//update land details

landApp.put("/update-land",expressAsyncHandler(async (request,response)=>{
    //get landcolletionobj
    const landcollectionObj=request.app.get("landcollectionObj");

    let modifiedData=request.body;

    let dbRes=await landcollectionObj.updateOne(
        {id:modifiedData.id},
        {$set:{...modifiedData}}

    );
    response.status(200).send({message:"data updated"});

}));


landApp.get("/getland",expressAsyncHandler(async (request,response)=>{
    //get landolletionobj
    const landcollectionObj=request.app.get("landcollectionObj");


    //get users from db
    let landData=await landcollectionObj.find().toArray();
    response.status(200).send({message:"data details",payload:landData})
}))

module.exports=landApp