const data=require('../../data');

const errorHandler=require('../../errorHandler');

module.exports=(req,res)=>{
    const id = parseInt(req.url.split('/')[2]);
    const success=data.deleteUser(id);

    if (success) {
        res.writeHead(204);
        res.end();
    } else {
        errorHandler(req,res,404, { message:'User not found'});
    }
};