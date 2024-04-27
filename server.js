var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(app.router);
app.use(express.static('public'));


var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'root',
  password : '1821',
  database : 'nodedb'

});

Connection.connect();

App.get('/', function(req, res) {
res.sendFile(__dirname + 'node/html')
});

app.post('/data', function(req, res){
    var username=req.body.name;
    connection.query("INSERT INTO names (name) VALUES (?)", username.toString(), function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
    res.send(username);
});


//connection.end();
App.listen(3000, function(){
console.log("example app  listening on port 300");
});
