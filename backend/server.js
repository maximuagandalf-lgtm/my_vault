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
    //fetching entries to be displayed on dashboard page
    const entries = await vaultentry.find();
    res.status(200).json(entries);

  } catch (err) {
    res.status(500).json({ message: "Could not fetch entries", error: err.message });
  }
});

app.get('/vault/:id', async(req, res)=>{
  try{
    const entry = await vaultentry.findById(req.params.id);
    if(!entry){res.status(404).json({message: "No entry found" })};
    res.status(200).json(entry);
  }catch(err){
    res.status(500).json({message: "Something went wrong"})
  }
});

app.delete('/vault', async(req, res)=>{
  try{
    // function deleteOne({filter}, {options}) returns an object with ID and delete data
    const deletedsitename = req.body.sitename;
    const deletedEntry = await vaultentry.deleteOne({_id: req.body._id});

    res.status(200).json({message: `${deletedsitename} deleted successfully.`, data: deletedEntry});

  }catch(err){
    res.status(500).json({message: "Some undefined error occured", error: err.message});
  }
})

//reading entries for editing
app.get('/vault/:_id', async(req, res)=>{
  try{
    const editingEntry = await vaultentry.findById(req.params._id);

    //if error
    if(!editingEntry){
      return res.status(404).json({message: "Entry not found"})}
      // if no error
       res.status(200).json(editingEntry)

  }catch(err){
    res.status(500).json({message: "Couldn't read the entry", error: err.message})
  }
})

//PUT and POST requests send html body to server unlike DELETE and GET requests
app.put('/vault/:id', async(req, res)=>{
  try{
    //updating the entry in Database
    const updateentry = await vaultentry.findByIdAndUpdate(req.params.id, {
      sitename:req.body.sitename,
      siteurl:req.body.siteurl,
      username_email:req.body.username_email,
      password: req.body.password
    }, {new:true, runValidators:true}); //findbyIdAnd Update(id, {updatebody}, {options});
    //by default Mongoose’s findByIdAndUpdate() returns the document as it was before the update happened.
    //hence we use {new: true} this make the function return new value instedd of old one 
    // we pass runValidators:true to make sure Mongoose checks all schema rules (like required: true, maxLength: 50, min: 5, etc.) for the updated entry.

    if(!updateentry){
      res.status(404).json({message:"Entry not found"})
    }

    console.log("Updated Entry: ", updateentry);
    
    res.status(200).json({
      message: "Entry Updated Succcessfully",
      data: updateentry
  });
  }catch(err){
    res.status(500).json({message: "Something went wrong.", err: err.message});
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});