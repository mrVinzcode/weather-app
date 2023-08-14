const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=manila&units=metric&appid=6079acfc8beb63451c0570900c5e606c";
  https.get(url, function (response) {
    console.log(response);
  });
  res.send("Weather App v1.0 server is up and running");
});

app.listen(3001, function (req, res) {
  console.log("server is running on the port 3000");
});

// const express = require("express");
// const https = require("https");
// const app = express();

// app.get("/", function (req, res) {
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=manila&units=metric&appid=92da537421fd2f5f8dba1214b315c2ad";
//   https.get(url, function (response) {
//     console.log(response);
//   });
//   res.send("Weather App V1.0 Server is up and running");
// });

// app.listen(3000, function (req, res) {
//   console.log("server is running on the port 3000");
// });
