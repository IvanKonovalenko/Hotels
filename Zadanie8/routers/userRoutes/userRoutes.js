const url=require('url');

const errorHandler=require('../../errorHandler');

const createUser=require('./createUser');
const deleteUser=require('./deleteUser');
const getUser=require('./getUser');
const updateUser=require('./updateUser');
const listUsers=require('./listUsers');



const userRoutes=(req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    const method=req.method;
    const path=parsedUrl.pathname;

    if (path === '/users' && method === 'GET'){
        listUsers(req,res);
    } else if (path === '/users' && method === 'POST') {
        createUser(req,res);
    } else if (path.startsWith('/users/') && method === 'GET') {
        getUser(req,res);
    } else if (path.startsWith('/users/') && method === 'PUT') {
        updateUser(req,res);
    } else if (path.startsWith('/users/') && method === 'DELETE') {
        deleteUser(req,res);
    } else {
        errorHandler(req,res,404, { message:'Route not found'});
    }
};

module.exports=userRoutes;