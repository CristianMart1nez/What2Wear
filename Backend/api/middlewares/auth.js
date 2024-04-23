const User = require('../models/user.model.js')
const jwt = require('jsonwebtoken')

function checkAuth(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(404).send('Token not found')
    }

    jwt.verify(
        req.headers.authorization,
        process.env.SECRET,
        async(error, payload) => {
            if(error) {
                console.log('Error jwt.verify: ', error.message)

                return res.status(401).send('Token not valid')
            }

            const user = await User.findOne({
                where: {
                    email: payload.email
                }
            })
        }
    )
}