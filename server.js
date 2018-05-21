var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Pet = require('./models/petModel');
 mongoose.Promise = require('bluebird');

const SERVER_PORT = 8080;



mongoose.connect(process.env.CONNECTION_STRING||'mongodb://localhost/petsDB', function() {
  console.log("DB connection established!!!");
})

// //original
// mongoose.connect('mongodb://localhost/petsDB', function() {
//   console.log("DB connection established!!!");
// })


var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//init data
//var firstPet = new Pet({text :"kkk"});
//firstPet.save() ;



// You will need to create 5 server routes
// These will define your API:

// 1) to handle getting all pets and their comments
app.get('/pet', function (req, res) {
  Pet.find().exec(function(err, pets){
    if (err){
      console.log(err)
    } else{
      // console.log(pets);
      res.send(pets);
    } 
  });
});
// 2) to handle adding a pet
app.post('/pets', (req, res) => {
  //get the data the client sent
  // console.log(req.body) //{text: "whaterver"}
  //save a new pet
  var newPet = new Pet(req.body);
  newPet.save((err, pet) => {
      //after it saved return the saved pet to the client, he'll get in the success function
      if (err) {
          console.log(err);
      } else {
          console.log('pet ADDED')
          res.send(pet);
      }
  })
});


// 3) to handle deleting a pet
app.delete(`/pets/:id`, (req, res) => {
  var id = req.params.id;
  // console.log(id)
  Pet.findByIdAndRemove(id).exec((err, pet) => {
      if (err) {
          console.log(err)
      } else {
          console.log('ERMOVED   :'+pet)
      }
  })
});

app.listen(process.env.PORT || '8080');
// app.listen(SERVER_PORT, () => {
//   console.log("Server started on port " + SERVER_PORT);
// });
