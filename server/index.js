// require('dotenv').config();
const express = require('express');
// const massive = require('massive');

const app = express();

// massive(process.env.CONNECTION_STRING).then(db => {
//     app.set('db', db);
//     console.log('Database Connected');
// }).catch(err => console.log(err));

app.listen(5050, () => console.log(`Listening on Port 5050`));