import DbConnection from '../dbConnection.js';

const dbConnection=new DbConnection();


class UserController{
    async createUser(req,res){
        try {
            const user=req.body;
            if(!(user.name && user.age)){
                return res.status(400).json({ message:'Name and age are required'});
            }
            dbConnection.addUser(user);
            res.status(200).json(user);
            
        } catch (err) {
            console.log(err);
            res.status(500);
        }
    }
    async updateUser(req,res){
        try {
            const {id}=req.params;
            const user=req.body;

            const updatedUser=await dbConnection.updateUser(id, user);

            if(!updatedUser){
                return res.status(404).json({ message:'User not found'});
            }
            res.status(200).json(updatedUser);

        } catch (err) {
            console.log(err);
            res.status(500);
        }
        
    }
    async deleteUser(req,res){
        try {
            const {id}=req.params;
            const success=await dbConnection.deleteUser(id);
            if(!success){
                return res.status(404).json({ message:'User not found'});
            }
            res.status(204).json({ message:'User deleted'});

        } catch (err) {
            console.log(err);
            res.status(500);
        }
    }
    async getUserById(req,res){
        try {
            const {id}=req.params;
            const user=await dbConnection.getUserById(id);

            if(!user){
               return res.status(404).json({ message:'User not found'});
            }
            res.json(user);

        } catch (err) {
            console.log(err);
            res.status(500);
        }
        
    }
    async listUsers(req,res){
        try {
            const users=await dbConnection.getUsers();
            res.json(users);

        } catch (err) {
            console.log(err);
            res.status(500);
        }
        
    }
    

}
export default UserController;