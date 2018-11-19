var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    return response.redirect('home');
});

app.get('/home', function(request, response){
    return response.render('index');
});

app.get('/getform', function(request, response){
    return response.render('get_form')
});

app.get('/postform', function(request, response){
    return response.render('post_form');
});

app.get('/getsubmit', function(request, response){
    return response.send(request.query);
});

app.post('/postsubmit', function(request, response){
    return response.send(request.body);
});

app.listen(3000, listening);
function listening(){
    console.log("listening . . .");
}


















/*
app.get('/', function(request, response){
    return response.redirect('getform')
});

app.get('/getform', function(request, response){
    return response.render('get_form')
});

app.get('/postform', postfunc);

function postfunc(request, response){
    return response.render('post_form')
}

app.get('/getsubmit', function(request, response){
    return response.send(request.query.burger);
});

app.get('/postsubmit', function(request, response){
    return response.send(request.body);
}); */

