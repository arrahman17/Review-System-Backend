var express = require('express');
var mongoose= require ('mongoose');
var bodyparser = require ('body-parser');
var cors = require('cors');
var path = require ('path');
var config = require('./config/database');



//connection to the MongDB
mongoose.connect(config.database);

//on connection 
mongoose.connection.on('connected',()=>
    {
      console.log('connected to the database' +config.database);
    }
  );

mongoose.connection.on('error',(err)=>
    {
  
    console.log('Database error'+err);
  
    }
  );

 var app = express();

var course = require ('./routes/course');

//port number 
const port = 3000;

//adding middlewarwe -cors

app.use(cors());

// static files 
//app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'Public')));
//app.use('/courses', express.static(path.join(__dirname, 'dist')));

//body-parser

app.use(bodyparser.json());


//routes
app.use ('/api', course);

 //testing server 
 app.get('/',(req,res)=>{
     res.send('In-valid Endpoint');
 })

app.listen(port,()=>{
  console.log('Server started at port:'+port);

})