const express = require( 'express' );
const mongoose = require( 'mongoose' );
const items = require( './routes/api/items' )

const app = express();

app.use( express.json() )

//db connection
const db = require( './config/keys' ).mongoURI;
// Connect to Mongo
mongoose
    .connect( db, {
        useNewUrlParser: true,
        useCreateIndex: true
    } ) // Adding new mongo url parser
    .then( () => console.log( 'MongoDB Connected...' ) )
    .catch( err => console.log( err ) );


app.use( '/api/items', items );

const port = process.env.PORT || 5000;

app.listen( port, () => console.log( 'server is on port: ' + port ) )