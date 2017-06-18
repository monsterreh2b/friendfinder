var friends = require("../data/friends");




module.exports = function(app) {
app.get("/api/friends", function(req, res) {
  res.json(friends);
});





app.post("/api/friends",function(req, res) {
  var newUser = req.body;
  newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();

  console.log(newUser);
  friends.push(newUser);

  res.json(newUser);
});



};









