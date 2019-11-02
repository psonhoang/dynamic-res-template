const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();

// Public static
app.use(express.static(path.join(__dirname, 'public')));
// View engine
app.set("view engine", "ejs");
app.set('views', [path.join(__dirname, 'views')]);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// GET JSON FROM API
jsonObj = {
    title: "Ninja Eats",
    jumboText1: "Your First Text Here",
    jumboText2: "And Another One",
    recipes: [
        {
            name: "Pho Pizza",
            desc: "A pizza with your favorite ingredients from Pho",
            price: 8.50,
            img: "https://cdn.foodbeast.com/content/uploads/2016/06/Pho-Pizza-Cover.jpg"
        },
        {
            name: "Seafood Delight",
            desc: "Shrimp, squid, tomato, and family secret",
            price: 12.00,
            img: "https://images-gmi-pmc.edge-generalmills.com/57be9c18-f2e5-453c-9286-c96d3ddb9555.jpg"
        },
        {
            name: "Banh Mi",
            desc: "Vietnamese Banh Mi",
            price: 5.00,
            img: "https://www.happyfoodstube.com/wp-content/uploads/2018/08/vietnamese-sandwich-banh-mi-image-500x500.jpg"
        },
        {
            name: "Carbonara",
            desc: "Carbonara spaghetti",
            price: 7.00,
            img: "https://www.oliviascuisine.com/wp-content/uploads/2019/01/authentic-spaghetti-carbonara-IG-720x540.jpg"
        }
    ]
}

app.get("/", (req, res) => {
    res.render("index", jsonObj);
});

app.get("/about", (req, res) => {
    res.render("about", jsonObj);
});

app.get("/contact", (req, res) => {
    res.render("contact", jsonObj);
});

app.get("/news", (req, res) => {
    res.render("news", jsonObj);
});

app.get("/recipes", (req, res) => {
    res.render("recipes", jsonObj);
});

app.get("/services", (req, res) => {
    res.render("services", jsonObj);
});

app.get("/single", (req, res) => {
    res.render("single", jsonObj);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server listening");
});