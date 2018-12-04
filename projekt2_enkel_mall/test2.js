var express = require('express');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');
var app = express();
var fs = require('fs');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, listening);
function listening(){
    console.log("listening . . .");
}

app.use( ( req, res, next ) => {
    setTimeout(next, 400 );
});


var list = {};

ggData = async function(stad){
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+stad+"&appid=d7ece5ce9d067035dec2e756f1368dfb";

    try {
        const response = await fetch(url);
        const json = await response.json();

        list["temp"] = json.main.temp;
        list["lon"] = json.coord.lon;
        list["lat"] = json.coord.lat;
        list["name"] = json.name;

        console.log(list);
        
    } catch (error) {
        console.log(error);
    }
}

app.get('/', function(request, response){
    return response.redirect('home');
});

app.get('/home', function(request, response){
    return response.render('index', list);
});

app.get('/test', function(request, response){
    return response.render('test_form', list)
});

app.get('/testsubmit', function(request, response){
    var inp = request.query.city;
    ggData(inp);
    console.log(list);
    
    return response.redirect('back');
    
});
