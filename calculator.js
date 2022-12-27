const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/bmicalculator",function(require, response){
    response.sendFile(__dirname + "/bmiCalculator.html")
});


app.post("/bmicalculator", function(require, response){
    var weight = Number(require.body.weight);
    var height = Number(require.body.height);
    response.send("Your BMI is "+(weight/(height*height)));
});

app.get("/", function(require, response){
    response.sendFile(__dirname+"/index.html");
});

app.post("/index.html", function(require, response){
    var num1 = Number(require.body.num1);
    var num2 = Number(require.body.num2);
    response.send("Result " + (num1+num2));
}); 

app.listen(3000, function(){
    console.log("Hosting in local host 3000.")
})



