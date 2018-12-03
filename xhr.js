var url3 = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
var url2 = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=d7ece5ce9d067035dec2e756f1368dfb"
var url = 'https://github.com/RobkaCode/WIEG17/blob/master/dogs.json';

var info = document.getElementById('div1');
var button = document.getElementById('btn')

var clickCount = 1;

button.addEventListener("click", function(){
    var req = new XMLHttpRequest();
    req.open('GET', url2);

    req.onload = function(){
    var data = req.responseText;
    var parsedData = JSON.parse(data);
    console.log(data);
    sendHTML(parsedData);
    };
    req.send();
});

function sendHTML(inData){
    var test = "";
    
    if(clickCount == 1){
        test += ("<p>" + inData.main.temp + "</p>");
        info.insertAdjacentHTML('beforeend', "Temperatur i London: " + test);
    }
    else if(clickCount == 2){
        test += ("<p>" + inData.wind.speed + "</p>");
        info.insertAdjacentHTML('beforeend', "Vindhastighet: " + test);
    }
    else if(clickCount == 3){
        test += ("<p>" + inData.main.humidity + "</p>");
        info.insertAdjacentHTML('beforeend', "Luftfuktighet: " + test);
    }
    else if(clickCount == 4){
        test += ("<p>" + inData.main.pressure + "</p>");
        info.insertAdjacentHTML('beforeend', "Lufttryck: " + test);
    }
    
    //test += ("<p>" + inData.main.temp + "</p>");

    clickCount += 1;

}



