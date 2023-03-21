const path = require('path')
const express = require('express');
const hbs = require('hbs');
const requests = require('requests')

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
        requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=9f550b7171516cd607fb89fcd860a94f`)
            .on('data', function (chunk) {
                const objData = JSON.parse(chunk);
                const arrayData = [objData];
                console.log(` City = ${arrayData[0].name}, temp =  ${arrayData[0].main.temp}`);
                // console.log(arrayData);
                // const realTimeData = arrayData
                // .map((val) => replaceVal(homeFile,val)).join("");
                res.write(arrayData[0].name);
                // console.log(realTimeData);
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);
                res.end();
            });
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('*',(req,res)=>{
    res.render('404',{
        errorcompo: '404 ERROR PAGE NOT FOUND'
    })
})
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})