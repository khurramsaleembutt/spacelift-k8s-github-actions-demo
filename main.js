const express = require("express");

const app = express();

app.get("*", (req, res) => res.send("<h1>Hello World!This is my first commit</h1>"));

app.listen(80, () => console.log("App is listening"));
