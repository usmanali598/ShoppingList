const express = require( 'express' );
const mongoose = require( 'mongoose' );
const bodyParser = require( 'body-parser' );

const app = express();

app.use( express.json() )
// app.use(bodyParser.json())

//db connection
const db = require( './config/keys' ).mongoURI;
mongoose
    .connect( db )
    .then( () => console.log( 'mongo is connected' ) )
    .catch( err => console.log( err ) )

const port = process.env.PORT || 5000;

app.listen( port, () => console.log( 'server is on port: ' + port ) )