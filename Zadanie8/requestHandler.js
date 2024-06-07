const url=require('url');

const errorHandler=require('./errorHandler');

const userRoutes=require('./routers/userRoutes/userRoutes');


const requestHandler=(req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    const path=parsedUrl.pathname;
    res.setHeader('Content-Type','application/json');

    if(path.startsWith('/users')){
        userRoutes(req,res);
    }
    else{
        errorHandler(req,res,404, { message:'Route not found'});
    }
    
}
module.exports=requestHandler;
