const   express = require('express'),
        bodyParser = require('body-parser'),
        jwt    = require('jsonwebtoken'),
        app = express(); 

app.set('Secret', "potatis");

const  ProtectedRoutes = express.Router(); 

app.use('/api', ProtectedRoutes);

app.use(bodyParser.json());

app.get('/get', function(req, res){
    res.send({type:'GET'});
});

app.post('/post', function(req, res){
    res.send({type:'POST'});
});


app.get('/', function(req, res) {
    res.send('TEST');
});

console.log(app.get('Secret'));

app.get('/get_token/:usr/:pwd',(request, response)=>{

    if(request.params.usr==="rob"){

        if(request.params.pwd==="123"){

            const payload = {

            check:  true

            };

            var token = jwt.sign(payload, app.get('Secret'), {
            expiresIn: 1440

            });

            response.json({
                message: 'token created ',
                token: token
            });

        }else{
            response.json({message:"check your password"})
        }

    }else{

        response.json({message:"username not valid"})

    }
});


ProtectedRoutes.use((req, res, next) =>{
  
    var token = req.headers['access-token'];
    console.log(token);


    if (token) {

      
      jwt.verify(token, app.get('Secret'), (err, decoded) =>{      
        if (err) {
          return res.json({ message: 'invalid token' });    
        } else {
          
          req.decoded = decoded;    
          next();
        }
      });

    } else {

      res.send({ 

          message: 'No token provided.' 
      });

    }
  });

  ProtectedRoutes.post('/show_items',(req,res)=>{
    let drawer = [
        {
            id: 1,
            name:"handskar"
        },
        {
           id: 2,
           name:"tofflor"
       }
    ]
   
    res.json(drawer)
   
   })




   app.listen(process.env.port || 4000, function(){
    console.log('Listening . . . ');
});
