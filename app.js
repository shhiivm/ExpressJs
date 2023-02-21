const express = require('express');

const app = express();

const port = 5000;

app.get('/',(req,res)=>{
    res.send("Hello Express from server!");
});

app.listen(port,()=>{
    console.log(`Listening to Express responce on port ${port}`)
})

// Points to remember
// get - Read
// post - create
// put - update
// delete - delete