const express = require("express");
const app = express();
const PORT = 3000;

const rappers = {
  "21 savage": {
    age: 29,
    birthname: "Sheyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },
  "chance the rapper": {
    age: 29,
    birthname: "Chancelor Bennett",
    birthLocation: "Chicago, Illinois",
  },
  unknown: {
    age: 0,
    birthname: "unknown",
    birthLocation: "unknown",
  },
};

//main route request
app.get("/", (req, res) => {
  //looks for index and send its
  res.sendFile(__dirname + "/index.html");
});

//main api request by specific rapper
app.get("/api/:name", (req, res) => {
  //request by param listed after :
  //console.log(req.params.name);
  const rapperName = req.params.name.toLowerCase();
  //console.log(rappers[rapperName]);
  //brackets for spaces in names -checks if name exists
  if (rappers[rapperName]) {
    //sends rapper name
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers["unknown"]);
  }
});

//listens for port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//to run node and check server run node server.js
