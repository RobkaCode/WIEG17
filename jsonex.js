console.log("server online");

var express = require('express');
var fs = require('fs');


var app = express();

app.listen(3000, listening);

function listening(){
    console.log("listening . . .");
}

app.use(express.static('website'));


var fs_data = fs.readFileSync('nbirds.json');
//console.log(fs_data);

var parsed_data = JSON.parse(fs_data);
//console.log(parsed_data);

var birds = parsed_data.birds;
//console.log(birds[1].members[1]);

var longSearch = function(x){
    this.x = x;

    var onadig = [];

    for(var i = 0; i < birds.length; i++){
        
        if(birds[i].family == x){

            for(var j = 0; j < birds[i].members.length; j++){
                onadig.push(birds[i].members[j]);
            }
        }
    }

    console.log(onadig);

}

var searchFamAndListMemb = function(b){
    var x = b;

    var list;

    for(var i = 0; i < birds.length; i++){
        
        if(birds[i].family == x){

            list = birds[i].members;
        }
    }

    console.log(list);
}

searchFamAndListMemb("Pelicans");
//longSearch("Pelicans");


