//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = [];
let workItems = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  let day = date();
  res.render('list', {listTitle: "Personal: To Do List, " + day, newListItems: items});
});

app.get("/work", function(req, res) {
  let day = date();
  res.render('list', {listTitle: "Work: To Do List, " + day, newListItems: workItems});
});

app.post("/", function(req, res) {
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function() {
  console.log("Server is started on port 3000");
});
