const path = require('path')
const express = require('express');
const hbs = require('hbs');

const app = express();

const port = 3001;


const staticPath=path.join(__dirname, "/demoWebsite")
const customPath = path.join(__dirname,"/customView/views")
const partialsPath = path.join(__dirname,"/customView/partials")


//To set the view engine
app.set('view engine','hbs')
app.set('views',customPath)


hbs.registerPartials(partialsPath)

// app.use(express.static(staticPath))

// template engine route
app.get('/',(req,res)=>{
    res.render('index',{
        AccountName : "Shivam",
    })
})
app.get('/about',(req,res)=>{
    res.render('about')
})


app.get('/',(req,res)=>{
    res.send("Hello from home Page")
})
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})