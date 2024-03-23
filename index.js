const express = require('express');
const app = express();

const db = require('./models');

const { Item } = require('./models'); 

app.get('/insert', (req, res) => {
    Item.create({
        name: 'Juan',
        price: 200,
    }).catch((err) => {
        console.log(err);
    });
    
});


db.sequelize.sync().then((req) => {
    app.listen(3001, () => {
        console.log('Server is running');
    });
});