const express = require('express');
const response = require('express');
const drinks = require("./models/drinks");
const foods = require('./models/foods');

const PORT = 3000;
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use("/static", express.static("public"))

app.get('/gitpub', (request, response) => {
    response.render('main')
});

app.get('/drinks', (request, response) => {
    response.render('drinks_index', 
    {
        allDrinks:drinks
    })
});

app.get('/foods', (request, response) => {
    response.render('foods_index', 
    {
        allFoods:foods
    })
});

app.get('/drinks/:id', (request, response) => {
    response.render('drinks_show', 
    {
        drinks,
        index: request.params.id,
        drink: drinks[request.params.id]
    });
})

app.get('/foods/:id', (request, response) => {
    response.render('foods_show', 
    {
        foods,
        index: request.params.id,
        food: foods[request.params.id]
    });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}); 