import express from 'express';
import cors from "cors";


const app = express();
const port = 8000;

app.use(cors({
    origin: 'http://localhost:3000' //allows requests only from this port
}))

app.get('/', (req, res) => {
  res.send('This is VaultKey');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});