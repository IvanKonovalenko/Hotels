import pkg from 'pg';
import path from 'path';
import dotenv from 'dotenv';
const {Pool} = pkg;

dotenv.config({
    override:true,
    path:path.join(path.resolve(),'dev.env')
});

class DbConnection{

    constructor(){
        this.pool = new Pool({
            user:process.env.USER,
            host:process.env.HOST,
            database:process.env.DATABASE,
            password:process.env.PASSWORD,
            port:process.env.PORTDB,
        });
        this.createTable();
    }

    async createTable(){
        const client=await this.pool.connect();
        client.query(`CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name TEXT,
            age TEXT
        );`);
    }

    async getUsers(){
        try {
            const client=await this.pool.connect();
            const {rows}=await client.query('SELECT * FROM users;');
            return rows;
        } catch (err){
            console.log(err);
        }     
    }

    async addUser(user){
        try {
            const client=await this.pool.connect();
            const text = 'INSERT INTO users(name, age) VALUES($1, $2) RETURNING *'
            await client.query(text,[user.name,user.age]);
        } catch (err){
            console.log(err);
        }
    }

    async updateUser(id, updatedData){
        try {
            const client=await this.pool.connect();
            const {rows}=await client.query('UPDATE users SET name=$1, age=$2 WHERE id=$3 RETURNING *',
            [updatedData.name,updatedData.age,id]);
            if(rows.length!=0)return rows[0];
            return null;
        } catch (err){
            console.log(err);
            return null;
        }
    }

    async deleteUser(id){
        try {
            const client=await this.pool.connect();
            const {rows}=await client.query('DELETE FROM users WHERE id=$1 RETURNING *',[+id]);
            if(rows.length==0)return false;
            return true;
        } catch (err){
            console.log(err);
            return false;
        }
    }
    
    async getUserById(id){
        try {
            const client=await this.pool.connect();
            const {rows}=await client.query('SELECT * FROM users WHERE id=$1;',[id]);
            return rows[0];
        } catch (err){
            console.log(err);
        }
    }
}
export default DbConnection;