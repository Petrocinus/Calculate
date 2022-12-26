const express = require("express");
const app = express();

app.get("/", function(require, response){
    response.sendFile(__dirname+"/index.html");
});

app.post("/", function(require, response){
    response.send("Oooooooops");
});//Должно выводиться на экран после calculate 

app.listen(3000, function(){
    console.log("Hosting in local host 3000.")
})