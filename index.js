const express = require("express");
const db = require("./routes/db-config");   
const app = express();
const cookie = require("cookie-parser");
app.use("/js", express.static(--dirname + "./public/js"))
app.use("/css", express.static(__dirname + "./public/css"))
app.set("view engine", "ejs");
app.set("views", "./views");

