var express=require('express');
var bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.json());
var dateFormat = require('dateformat');
var now = new Date();
var date=dateFormat(now, "yyyymmdd");
var user = require("./user.js");
var webinfo = require("./web.js");
console.log(date);

// return APIs
function process_data(err, data,resb){
   //console.log(data);
    if(data.type == "register"){
    resb.writeHead(200, { "Content-Type": "text/html" });
    var myresp="<fieldset><div id='success_page'><h3 class='succes_message'>Email Sent Successfully.</h3><p>Thank you <strong>";
    console.log(data);
    myresp+=data.name;
    myresp+="</strong>, your message has been submitted to us.</p></div></fieldset>";
    resb.write(myresp);
    resb.end();
    }else{
      resb.end(JSON.stringify(data));
    }
}

app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/JS'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res){
   res.render('index.html');
   webinfo.entry('index.html',res,process_data);
});

app.get('/register',function(req,res){
   console.log(req.query);
   user.register(req.query,res,process_data);
   webinfo.entry('register.html',res,process_data);
});
app.get('/pagetrack',function(req,res){
    console.log(req.query.page);
   webinfo.entry(req.query.page,res,process_data);
});
app.post('/sendinfo', function(req, response) {
    user.register(req.body,response,process_data);
    webinfo.entry('register.html',res,process_data);
});
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
//var server=app.listen(3000,function(){
//console.log("We have started our server on port 3000");
//});

