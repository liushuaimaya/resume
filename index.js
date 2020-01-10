const express = require("express");
const https = require("https");
const fs = require("fs");
const app = express();
const port = 443;

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/vuee.me/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/vuee.me/fullchain.pem")
};

https.createServer(options, app);

app.use(
  express.static("public", {
    extensions: ["html", "htm"]
  })
);

app.listen(port);

// {
//   key: fs.readFileSync("/etc/letsencrypt/live/vuee.me/privkey.pem"),
//   cert: fs.readFileSync("/etc/letsencrypt/live/vuee.me/fullchain.pem")
// }
