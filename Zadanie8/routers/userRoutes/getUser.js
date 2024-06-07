const data=require('../../database');

const errorHandler=require('../../errorHandler');

module.exports=async(req,res)=>{
    const id=parseInt(req.url.split('/')[2]);
    const user=await data.getUserById(id);

    if(user){
        res.writeHead(200);
        res.end(JSON.stringify(user));
    }
    else {
        errorHandler(req,res,404, { message:'User not found'});
    }
};