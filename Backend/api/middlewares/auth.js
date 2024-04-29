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

            if(!user) {
                return res.status(401).send('Token not valid')
            }

            res.locals.user = user
            
            next()
        }
    )
}

function checkAdmin(req, res, next) {
    if (res.locals.user.role !== 'admin') {
      return res.status(401).json('Admins only')
    }
    else {
      next()
    }
  }
  
  module.exports = {
    checkAuth,
    checkAdmin
  }