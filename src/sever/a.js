const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const data = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
];

app.use(express.static(path.join(__dirname, "")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "", "index.html"));
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/about", (req, res) => {
    res.send(data);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
