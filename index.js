const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const app = express();

const flag = process.env.FLAG
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

app.listen(PORT, () => {
    console.log(`Challenge 1 Started`);
    console.log(`Server running at http://localhost:${PORT}`);
});
