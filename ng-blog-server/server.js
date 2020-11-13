const express=require('express');
const app=express();
const cors=require('cors');

var corsOptions={
    origin:["http://localhost:4200","http://localhost:4000"]
}
app.use(cors(corsOptions));

app.listen(8000,()=>{
    console.log("Server os started and listening")
})

app.get("/",function(request,response){
    response.send("Hello");
})

require("./article.js")(app);