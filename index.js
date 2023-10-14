
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));



const userController = require('./controllers/userController');




app.use(express.static('public'));


// middleware
function logTime(req, res, next) {
    console.log(`Request received at: ${new Date()}`);
    next(); // Move to the next middleware
  }


app.use(logTime);

app.get('/contact', (req, res) => {
    res.send('Contact us at contact@example.com');
    });

app.get('/', function(req, res){

   res.send("Hello world!");
});

app.get("/about", (req, res) => {
    res.send('Welcome to Express Tutotial ')
})


app.get('/blogs', (req, res) => {
    let data = [
        {"header":"World Cup 2023","detail":"fjfd"},
        {"header":"Isreal Attacks on Hamas","detail":"fffnd"},
        {"header":"VVMC Water in Sunteck", "detail":"fafadfdafda"}
    ];
    let msg = "Welcome to Coding Chaska"

    let data2 = {
        "message":msg,
        "blogs":data,
        "isloggedIn": false,
    }

    res.render("blogs", data2)


})

   

app.post('/get-form', function(req, res){
    console.log(req.body);
    res.send("Form submitted successfully!!")
})

function foo(){
    console.log("Server is running at 3000")
}




app.listen(3000, foo);