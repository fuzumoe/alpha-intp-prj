 var express  = require('express');
 var app= express();
 var mongojs = require('mongojs');
 var bodyParser  = require('body-parser');
 var db = mongojs('contactlist',['contactlist']);

 app.use(express.static(__dirname+"/public"));
 app.use(bodyParser.json());

 app.get('/contactlist',function(req,res){
   console.log("I recived a get request");
   // statically defined data 
   //person1 = {
   //               name : 'Tim',
   //               email: 'tim@email.com',
   //               number:'(111) 111-1111'
   //          };
   // person2 ={
   //   	  name : 'Emily', 
   //   	  email : 'emily@email12.com',
   //   	   number :'(222) 222-2222'
   //   };
   //  person3 = {
   //   	name : 'John',
   //   	email : 'john@email4.com',
   //   	number : '(333) 333-3333'
   //   }
     // var contactList = [person1,person2,person3];
     // res.json(contactList);

     //data coming from mongos
     db.contactlist.find(function(err,docs){
     	console.log(docs);
     	res.json(docs);
     });
 });

  //listen to form post method
 app.post('/contactlist',function(req,res){
 	//show parsed json data :: using body-parser
      console.log(req.body);
      db.contactlist.insert(req.body,function(err,doc){
          res.json(doc);
      });
 });


 app.listen(3000)
 console.log("server running on port 3000");