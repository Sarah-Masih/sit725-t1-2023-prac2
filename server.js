//setting up the server: run using command: npm run start
var express = require('express');
var app = express();
var port = process.env.port || 3000; // can be 8080 or 5000 instead of 3000 as long as it works

app.use(express.static(__dirname + '/public')); // __dirname is a reserved keyword for express
app.use(express.json());
app.use(express.urlencoded({extended:false}));

function complexMath(num1, num2){
    return parseInt(num1) + parseInt(num2);
};

// runs for url http://localhost:3000/
app.get('/', function(req,res) 
{
    res.render('index.html');
});

// runs for url http://localhost:3000/addTwoNumbers?number1=3&number2=4
app.get('/addTwoNumbers',(req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = complexMath(number1, number2);
    res.json({statusCode:200, data:result, message: 'Sucess'});
});

app.listen(port, () => {
    console.log('App listening to: ' + port);
    console.log('App listening to: ' );
}); // anything can be a function and anything can be a parameter, here () is an anonymous function defined by => as {...}
