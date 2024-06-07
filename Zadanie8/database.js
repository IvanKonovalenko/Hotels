const { Pool } = require('pg');

const path=require('path');
require('dotenv').config({
    override:true,
    path:path.join(__dirname,'dev.env')
});

const pool = new Pool({
    user:process.env.USER,
    host:process.env.HOST,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port:process.env.PORT,
});
createTable(pool)
async function createTable(pool){
    const client=await pool.connect();
    client.query(`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT,
        age TEXT
    );`);
}

module.exports={
    getUsers: async ()=>{
        try {
            const client=await pool.connect();
            const {rows}=await client.query('SELECT * FROM users;');
            return rows;
        } catch (err){
            console.log(err);
        }     
    },

    addUser: async (user)=>{
        try {
            const client=await pool.connect();
            const text = 'INSERT INTO users(name, age) VALUES($1, $2) RETURNING *'
            await client.query(text,[user.name,user.age]);
        } catch (err){
            console.log(err);
        }
    },
    updateUser:async (id, updatedData)=>{
        try {
            const client=await pool.connect();
            const {rows}=await client.query('UPDATE users SET name=$1, age=$2 WHERE id=$3 RETURNING *',
            [updatedData.name,updatedData.age,id]);
            if(rows.length!=0)return rows[0];
            return null;
        } catch (err){
            console.log(err);
            return null;
        }
    },
    deleteUser:async (id)=>{
        try {
            const client=await pool.connect();
            const {rows}=await client.query('DELETE FROM users WHERE id=$1 RETURNING *',[id]);
            if(rows.length==0)return false;
            return true;
        } catch (err){
            console.log(err);
            return false;
        }
    },
    getUserById:async (id)=>{
        try {
            const client=await pool.connect();
            const {rows}=await client.query('SELECT * FROM users WHERE id=$1;',[id]);
            return rows[0];
        } catch (err){
            console.log(err);
        }
    }
};