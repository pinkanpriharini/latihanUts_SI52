let mongoose = require("mongoose");
// let dbURL = "mongodb://localhost:27017"
// let dbURi = 

mongoose.connect(dbURI, {
    //useNewURLParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongooDB");
});

mongoose.connection.on("error", (error) => {
    console.log("Connection Error: " + error);
});

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongooDB ");
});