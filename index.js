const path = require('path')
const express = require('express');
const app = express();

const port = 3001;


const staticPath=path.join(__dirname, "/demoWebsite")
const customPath = path.join(__dirname,"/customView")
//To set the view engine
app.set('view engine','hbs')
app.set('views',customPath)

// app.use(express.static(staticPath))

// template engine route
app.get('/',(req,res)=>{
    res.render('index',{
        AccountName : "Shivam",
    })
})

app.get('/',(req,res)=>{
    res.send("Hello from home Page")
})
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})