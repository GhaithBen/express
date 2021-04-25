const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "pug");
app.set("views", "./views");
app.get("/services", function (req, res) {
    res.render("Our_services");
});
app.get("/contact", function (req, res) {
    res.render("Contact_us");
});
app.get("*", function (req, res) {
    res.render("Home");
});
/* app.get("/css/style.css", (req, res) => {
    res.sendFile(__dirname + "css/style.css");
}); */
app.use(express.static("public"));
app.listen(port, function () {
    console.log(
        "The server is running, " +
            " please, open your browser at http://localhost:%s",
        port
    );
});
