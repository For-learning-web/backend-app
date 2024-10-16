import express from 'express';
import path from 'path';
import register from './src/api/routes/register.js';
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'src' ,'public')));

app.get('/index.html', (req , res ) => {
    res.sendFile(path.join(__dirname, 'src','public','html', 'index.html'));
})

app.use('/register', register);

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})