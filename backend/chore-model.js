const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Chore = new Schema({
    description: {
        type: String
    },
    assignee: {
        type: String
    },
    dueDate: {
        type: Date
    },
    completed: {
        type: Boolean
    }
});

module.exports = mongoose.model("Chore", Chore);