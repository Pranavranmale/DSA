const http=require('http')
const a=require('./day1')
const fs=require('fs')
const { default: day1 } = require('./day1')
const Server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    // res.end("hello from fode js ")

    if(req.url==='/'){
        fs.readFile('boot.html',(err,data)=>{
            res.write(data)
            return res.end()
        })
    }
    else if(req.url==='/home'){
        res.write('this is about Page')
    }
    else if(req.url==='/about'){
        res.write("this is about page")
    }
    else if(req.url==='/Contact'){
        res.write("this is contect page")
    }
   else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.write("page not found")
   }
})
const PORT=3000
Server.listen(PORT,()=>{
    console.log(`server routing at localhost:${PORT}`);
    
})

