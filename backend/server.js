import express from 'express';
import cors from "cors";


const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:3000' //allows requests only from this port
}))

app.get('/', (req, res) => {
  res.send('This is VaultKey');
});

app.post('/addpassword', (req,res)=>{
    console.log("sitename: ", req.body.sitename);
    console.log("siteurl: ", req.body.siteurl);
    console.log("username_email: ", req.body.username_email);
    console.log("password", req.body.password);

    //
    res.status(200).json({message: "Password Entered successfully"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});