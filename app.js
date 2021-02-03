// Imports
const express = require('express')
const app = express()
const hbs = require("hbs")
const port = process.env.PORT || 3000
const path = require("path");
var cors = require('cors');

const static_path = path.join(__dirname, "../QuadB/public/");
const template_path = path.join(__dirname, "../QuadB/templates/views");
const partial_path = path.join(__dirname, "../QuadB/templates/partials");



app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);


//console.log(path.join(__dirname, "../QuadB/public"));
app.use(express.static(static_path));




app.get('', (req, res) => {
    res.render("index")
})
app.listen(port, () => console.info(`App listening on port ${port}`))