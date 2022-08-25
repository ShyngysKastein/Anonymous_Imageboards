import express from 'express';
import db from '../fileDb.mjs';
import {nanoid} from 'nanoid';
import multer from 'multer';
import config from '../config.mjs';
import * as path from 'path';

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, config.uploadPath);
    },
    filename:(req,file,cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
})

const upload = multer({storage});

const router = express.Router();

router.get('/',(req,res) => {
    const products = db.getItems();
    res.send(products);
})

router.post('/',upload.single('image'), (req,res) => {
    const body = {id:nanoid(21), ...req.body};
    if(req.file){
        body.image = req.file.filename;
    }
    
    if(!req.body.message){
        const error = {error: 'Message is a required field'}
        res.send(error);
    }else{
        db.addItem(body);
        res.send(body);
    }
})

export default router;