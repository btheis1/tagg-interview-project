const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const choreRoutes = express.Router();
const PORT = process.env.PORT || 3001;

let Chore = require("./chore-model")
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/chores", { useNewUrlParser: true })
const connection = mongoose.connection;

connection.once("open", function() {
    console.log("Connected to MongoDB database");
});

choreRoutes.route("/").get(function(req, res) {
    Chore.find(function(err, chores) {
        if (err) {
            console.log(err);
        } else {
            res.json(chores);
        }
    })
    .sort({ dueDate: 1 })
});

choreRoutes.route("/add").post(function(req, res) {
    let chore = new Chore(req.body)
    chore.save()
        .then(chore => {
            res.status(200).json({"chore" : "chore added successfully"})
        })
        .catch(err => {
            res.status(400).send("adding new chore failed")
        })
});

choreRoutes.route("/:id").get(function(req, res) {
    let id = req.params.id;
    Chore.findById(id, function(err, chore) {
        if (err) {
            console.log(err);
        } else {
            res.json(chore);
        }
    });
});

choreRoutes.route("/update/:id").post(function(req, res) {
    Chore.findById(req.params.id, function(err, chore) {
        if (!chore) {
            res.status(404).send("No chores found");
        } else {
            chore.description = req.body.description;
            chore.assignee = req.body.assignee;
            chore.dueDate = req.body.dueDate;
            chore.completed = req.body.completed;

            chore.save().then(chore => {
                res.json("Chore updated!")
            })
            .catch(err => {
                res.status(400).then("Update failed")
            });
        }
    });
});

app.use("/chores", choreRoutes)


app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});