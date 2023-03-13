import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import trainersRoutes from './routes/trainers.routes.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticPage = path.join(__dirname,'home-page');
const staticPageTwo = path.join(__dirname,'home-page2')


const PORT = 3000;
const HOSTNAME = "localhost"

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api',trainersRoutes);
app.use('/home',express.static(staticPage));
app.use('/home/trainer.jpg',express.static(staticPageTwo));

app.listen(PORT,HOSTNAME,()=>{
    console.log(`Server started lisening on http://${HOSTNAME}:${PORT}`)
})




