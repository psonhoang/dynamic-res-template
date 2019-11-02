const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const request = require("request");
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
    title: "Your Restaurant Name",
    jumboText1: "Your First Text Here",
    jumboText2: "And Another One",
    address: "123 Hyde Park Blvd",
    email: "johndoe123@gmail.com",
    phoneNumber: "773 604 9872",
    appetizers: [
        {
            name: "Tuna Sesame Salad",
            desc: "Tuna, sesame, salad",
            price: "3.75",
            img: "http://balaboosta.com.au/wp-content/uploads/2015/10/PA070874.jpg"
        },
        {
            name: "Smoked Salmon",
            desc: "Salmon, bread, cheese... all on a stick",
            price: "4.50",
            img: "https://www.recipetineats.com/wp-content/uploads/2016/10/Smoked-Salmon-Bites_2-680x951.jpg"
        }
    ],
    entree: [
        {
            name: "Pho Pizza",
            desc: "A pizza with your favorite ingredients from Pho",
            price: "8.50",
            img: "https://cdn.foodbeast.com/content/uploads/2016/06/Pho-Pizza-Cover.jpg"
        },
        {
            name: "Seafood Delight",
            desc: "Shrimp, squid, tomato, and family secret",
            price: "12.00",
            img: "https://images-gmi-pmc.edge-generalmills.com/57be9c18-f2e5-453c-9286-c96d3ddb9555.jpg"
        },
        {
            name: "Banh Mi",
            desc: "Vietnamese Banh Mi",
            price: "5.00",
            img: "https://www.happyfoodstube.com/wp-content/uploads/2018/08/vietnamese-sandwich-banh-mi-image-500x500.jpg"
        },
        {
            name: "Carbonara",
            desc: "Carbonara spaghetti",
            price: "7.00",
            img: "https://www.oliviascuisine.com/wp-content/uploads/2019/01/authentic-spaghetti-carbonara-IG-720x540.jpg"
        }
    ]
}

app.get("/", (req, res) => {
    request("https://d75dffea.ngrok.io/testuser", {json: true}, (err, response, body) => {
        if(err) {return console.log(err);}
        // Check if response body is empty
        if(JSON.stringify(body) !== "{}") {
            // Populate jsonObj
            jsonObj = body; 
            // {
            //     title: "Your Restaurant Name",
            //     jumboText1: "Your First Text Here",
            //     jumboText2: "And Another One",
            //     address: "123 Hyde Park Blvd",
            //     email: "johndoe123@gmail.com",
            //     phoneNumber: "773 604 9872"
            // };
            jsonObj["entree"] = [
                {
                    name: "Pho Pizza",
                    desc: "A pizza with your favorite ingredients from Pho",
                    price: "8.50",
                    img: "https://cdn.foodbeast.com/content/uploads/2016/06/Pho-Pizza-Cover.jpg"
                },
                {
                    name: "Seafood Delight",
                    desc: "Shrimp, squid, tomato, and family secret",
                    price: "12.00",
                    img: "https://images-gmi-pmc.edge-generalmills.com/57be9c18-f2e5-453c-9286-c96d3ddb9555.jpg"
                },
                {
                    name: "Banh Mi",
                    desc: "Vietnamese Banh Mi",
                    price: "5.00",
                    img: "https://www.happyfoodstube.com/wp-content/uploads/2018/08/vietnamese-sandwich-banh-mi-image-500x500.jpg"
                },
                {
                    name: "Carbonara",
                    desc: "Carbonara spaghetti",
                    price: "7.00",
                    img: "https://www.oliviascuisine.com/wp-content/uploads/2019/01/authentic-spaghetti-carbonara-IG-720x540.jpg"
                }
            ];
            jsonObj["appetizers"] = [
                {
                    name: "Tuna Sesame Salad",
                    desc: "Tuna, sesame, salad",
                    price: "3.75",
                    img: "http://balaboosta.com.au/wp-content/uploads/2015/10/PA070874.jpg"
                },
                {
                    name: "Smoked Salmon",
                    desc: "Salmon, bread, cheese... all on a stick",
                    price: "4.50",
                    img: "https://www.recipetineats.com/wp-content/uploads/2016/10/Smoked-Salmon-Bites_2-680x951.jpg"
                }
            ];
        }
        // Generate dynamic website from jsonObj
        res.render("index", jsonObj);
    });
});


// Routes are only called when jsonObj is populated
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