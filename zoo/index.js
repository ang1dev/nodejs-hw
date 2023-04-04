import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { connectToDataBase } from './db/mongo-conection.js'

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost'

const app = express();
app.use(cors());
app.use(express.json());



app.listen(PORT, HOST, async (error) => {
    if (error) console.log('Error while starting server', error)
    // await connectToDataBase()
    console.log (`Server running on http://${HOST}:${PORT}`)
})