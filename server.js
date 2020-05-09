const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const cors = require('cors');
const app = express();

//routes
const authRoutes = require('./routes/api/auth');
const itemRoutes = require('./routes/api/items');
const userRoutes = require('./routes/api/users');

//Bodyparser Middleware
app.use(express.json())
// CORS Middleware
app.use(cors());

//db connection
const db = config.get('mongoURI');
// const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Static folder setting
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server is on port: ' + port))