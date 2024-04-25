import express from 'express';
import { join } from 'path';
const route = express();
import userDetailsSchema from './schema.js';
import mongoose from 'mongoose';

const userDetail = new mongoose.model("UserDetail",userDetailsSchema);

route.use(express.static('public'));


route.get('/about', (req, res) => {
  res.sendFile(join(process.cwd(),'public', '/about.html'));
});

route.get('/review', (req, res) => {
  res.sendFile(join(process.cwd(),'public', '/client_review.html'));
});

route.get('/contact', (req, res) => {
  res.sendFile(join(process.cwd(),'public', '/contact.html'));
});

route.get('/error', (req, res) => {
  res.sendFile(join(process.cwd(),'public', '/error.html'));
});

route.get('/project', (req, res) => {
  res.sendFile(join(process.cwd(),'public', '/project.html'));
});

route.get('/more', (req, res) => {
  res.sendFile(join(process.cwd(),'public', '/read_more.html'));
});

route.get('/service', (req, res) => {
  res.sendFile(join(process.cwd(),'public', '/service.html'));
});

route.get('/team', (req, res) => {
  res.sendFile(join(process.cwd(),'public', '/team.html'));
});

route.post('/submit',async(req,res)=>{
    try{
        const user = new userDetail({
            name : req.body.name,
            number : req.body.number,
            subject :req.body.subject,
            message : req.body.message
        })

        const result = await user.save();
        res.sendFile(join(process.cwd(),'public','/contact.html'));
    }catch (err){
        console.log(err);
    }
})

route.get('/home', (req, res) => {
  res.sendFile(join(process.cwd(),'public', '/index.html'));
});

route.get('/', (req, res) => {
  res.sendFile(join(process.cwd(),'public', '/index.html'));
});


export default route;
  