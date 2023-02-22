const express = require('express');

const app = express();

const port = 5000;

app.get('/',(req,res)=>{
    res.send("Hello Express from server!");
});

app.get('/contact',(req,res)=>{
    res.send("hello from contact Us page")
})

app.listen(port,()=>{
    console.log(`Listening to Express response on port ${port}`)
})

// Points to remember
// get - Read
// post - create
// put - update
// delete - delete