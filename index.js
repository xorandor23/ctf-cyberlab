const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const app = express();

const flag = "CYBERLAB{d0nt_w0rry_b3_h4ppy_0b1h82h}"
const link = "http://rocknroll.fun/"
const PORT = 5000

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  if (req.get("Referer") == link) {
    res.render('index', { flag });
  } else {
   res.render('welcome', { link });
  }
});

/* module.exports = app; */
/* module.exports.handler = serverless(app); */

module.exports = app;
