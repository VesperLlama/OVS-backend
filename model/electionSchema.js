const mongoose = require("mongoose");

const electionSchema = new mongoose.Schema({
    "name": {type: String},
    "password": {type: String},
    "mobileNo": {type: Number},
    "aadharNo": {type: Number},
    "party": {type: String},
    "voteStatus": {type: Boolean}
}, {
    collection: "users"
});

module.exports = mongoose.model("electionSchema", electionSchema);