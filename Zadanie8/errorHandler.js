module.exports=(req,res,code,data)=>{
    res.writeHead(code);
    res.end(JSON.stringify(data));
};
