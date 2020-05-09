// =================================
// Dependencies
// =================================
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;


// =================================
// Middleware
// =================================
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));



// =================================
// Mongoose Connections
// =================================
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


app.get('/', (req, res) => {
    res.render('Index');
})



app.listen(port, () => {
    console.log('server is running');
})
