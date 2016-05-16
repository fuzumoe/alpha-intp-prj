 var express  = require('express');
 var app= express();
 var mongojs = require('mongojs');
 var bodyParser  = require('body-parser');
 var db = mongojs('contactlist',['contactlist']);

 app.use(express.static(__dirname+"/public_html"));
 app.use(bodyParser.json());

 app.get('/contactlist',function(req,res){
    console.log("I recived a get request");
  
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
 app.delete('/contactlist/:id',function(req,res){
     var id = req.params.id;
     console.log(id);
     db.contactlist.remove({_id:mongojs.ObjectId(id)},function(err,docs){
        res.json(docs);
     });
 });

 app.get('/contactlist/:id',function(req,res){
       var id = req.params.id;
       console.log(id);
       db.contactlist.findOne({_id: mongojs.ObjectId},function(err,docs){
           res.json(docs);
       });
 });

 app.put('/contactlist/:id',function(req,res){
         var id = req.params.id;
         console.log(req.body.name);
         db.contactlist.findAndModify(
           {query:{_id:mongojs.ObjectId(id)},
            update:{$set:{name:req.body.name,email:req.body.email,number:req.body.number}},
         	new:true},function(err,docs){
         		res.json(docs);
         	});

 });


 app.listen(3000)
 console.log("server running on port 3000");