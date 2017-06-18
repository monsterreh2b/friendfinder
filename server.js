

// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//htmlRoutes(app);
//apiRoutes(app);
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



// app.get("/reserve", function(req, res) {
//   res.sendFile(path.join(__dirname, "reserve.html"));
// });

// app.get("/tables", function(req, res) {
//   res.sendFile(path.join(__dirname, "tables.html"));
// });

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });


// var users = [
  
//   {
//   name: "Nick",
//   photo: "206-491-2443",
//   scores: 900
// }

// ];

// var users = [];

// // Routes






// // Table Reserve
// // customerName
// // phoneNumber
// // customerEmail 
// // customerID
// // Name, Phone, Email, Unique ID


// app.post("/api/tables", function(req, res) {

//   var newTable = req.body;
 
//   //newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

//   //console.log(newTable);
  

//   tables.push(newTable);

//   res.json(newTable);

// });


// app.get("/api/tables", function(req, res) {
// //  var chosen = req.params.newTable;
//  var tables = req.body;
//   return res.json(tables);
// });









// Port listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
