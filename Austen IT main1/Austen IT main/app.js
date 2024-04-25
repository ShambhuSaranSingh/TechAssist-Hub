import express from 'express'
import route from './server.js'
const app = express();
const router = route;
import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/austendatabase").then(()=>{
  console.log("Connection Successfull");
}).catch((err)=>{
  console.log(err);
})

app.use(express.urlencoded({extended:false}))

// Serve static files from the "public" directory
app.use(express.static('public'));

app.use("/",router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});