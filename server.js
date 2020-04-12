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

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Static folder setting
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 5000;

app.listen( port, () => console.log( 'server is on port: ' + port ) )