const express = require( 'express' );
const router = express.Router();
const bcrypt = require( 'bcryptjs' );
const config = require( 'config' );
const jwt = require( 'jsonwebtoken' );

// User Model
const User = require( '../../models/User' );

// @route   POST api/user
// @desc    Register new user
// @access  Public
router.post ( '/', ( req, res ) =>
{
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({msg:'Please enter all fields'})
    }

    User.findOne({ email })
        .then(user => {
            if(user) return res.status(400).json({msg:'User already exist'})
        })
    
    const newUser = new User({
        name, email, password
    });
     
    //create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
                .then(user => {

                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                toke,
                                user: {
                                    id:user.id,
                                    name:user.name,
                                    email:user.email
                                }
                            })
                        }
                    )
                })
        })
    })

});

module.exports = router;