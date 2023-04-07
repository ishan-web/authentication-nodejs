const express = require("express");
const db = require("./routes/db-config");     //calling 'const db' from 'db-config routes' which is used to connect to the database
const app = express();
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 5000;   //calling the port 

app.use("/js", express.static(__dirname + "./public/js")) //giving path to read js files inside public
app.use("/css", express.static(__dirname + "./public/css")) //path for css file inside public folder
app.set("view engine", "ejs");  // this is make server to render any ejs file mentioned within the path  mentioned below
app.set("views", "./views");   //giving the path to ejs file
app.use(cookie());
app.use(express.json());
db.connect((err) =>{
    if (err)  throw err;   //throw err if there is problem with the connection with the database
})

app.use("/", require("./routes/pages"));
// app.use("/api", register("./controllers/auth"));
app.listen(PORT);

