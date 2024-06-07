const data=require('../../data');

const errorHandler=require('../../errorHandler');

module.exports=(req,res)=>{
    const id=parseInt(req.url.split('/')[2]);
    const user=data.getUserById(id);

    if(user){
        res.writeHead(200);
        res.end(JSON.stringify(user));
    }
    else {
        errorHandler(req,res,404, { message:'User not found'});
    }
};