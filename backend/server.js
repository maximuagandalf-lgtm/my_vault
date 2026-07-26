import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import vaultentry from './models/vaultentry.js';


const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:3000' //allows requests only from this port
}))

// connecting to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/vaultkey').then(()=> console.log('Connected to MongoDB')).catch((err)=> console.log('MongoDB connection error: ', err));

app.get('/', (req, res) => {
  res.send('This is VaultKey');
});

//saving the credentials data into MongoDB
app.post('/addpassword', async (req,res)=>{
    try{
        const newentry = new vaultentry({
            sitename: req.body.sitename,
            siteurl: req.body.siteurl,
            username_email: req.body.username_email,
            password: req.body.password,
        });

        const savedentry = await newentry.save();
        res.status(200).json({message: "Password entry saved", data: savedentry});
    } catch(err){
        res.status(500).json({message: "Something went wrong", error: err.message});
    }
});

// now fetch the entries from database
app.get('/vault', async (req, res) => {
  try {
    const entries = await vaultentry.find();
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ message: "Could not fetch entries", error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});