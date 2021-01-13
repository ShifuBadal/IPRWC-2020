const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

// Connect to db
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });

// On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to db ' +config.database)
});

// On error
mongoose.connection.on('error', (err) => {
    console.log('Database error ' +err)
});

const app = express();
const users = require('./routes/users')
const port = 3000;

//cors
app.use(cors())

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//User functionality
app.use('/users', users)

//index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});

//start server
app.listen(port, () => {
    console.log('Server started on port '+port);
});





