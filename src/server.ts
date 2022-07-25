import express, { Application } from "express";


const app : Application = express(); 
const port = 3333;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log('Running on port 3333');
});

