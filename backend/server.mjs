import express from 'express';
import thread from './routes/thread.mjs';
import db from './fileDb.mjs';
import cors from 'cors';

const app = express();
const PORT = 8000;

db.init();
app.use(express.static('public'));
app.use(cors());
app.use(express.json())
app.use('/thread',thread);





app.listen(PORT,() => {
    console.log(`Server started at http://localhost:${PORT} port`);
})