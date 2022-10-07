const express = require("express");
const app = express();
const port = 3004;
const mongodb = require("mongodb");
const myMongoClient = mongodb.MongoClient;
const mongoURL = "mongodb://localhost/mern-shop";

myMongoClient.connect(
  mongoURL,
  { useUnifiedTopology: true },
  function (err, db) {
    if (err) console.log(err);
    console.log("Connect db successfully");
    db.close();
  }
);

app.get("/api/products", function (req, res) {
  console.log("API GET ");
});

app.listen(port, () => {
  console.log("App run on: ", port);
});
