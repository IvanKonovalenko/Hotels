import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import userRouter from './Routes/userRouter.js';


dotenv.config({
    override:true,
    path:path.join(path.resolve(),'dev.env')
});

const PORT=process.env.PORT;

const app = express();

app.use(express.json())
app.use(userRouter);

app.listen(PORT,()=>{
    console.log(`Сервер запущен на порту ${PORT}`);
});