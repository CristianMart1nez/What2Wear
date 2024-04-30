const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user.model.js')

const SignUp = async(req, res) => {

    try {
        //Password encryption

        const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
        const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
        req.body.password = hashedPassword

        const user = await User.create({
            firstName: req.body.firstName,
            email: req.body.email,
            password: req.body.password
        })

        console.log(req.body)
        
        //Create JWT
        const payload = { email: req.body.email }
        const token = jwt.sign(payload, process.env.SECRET)

        return res.status(200).json({ 
            token,
            firstName: req.body.firstName,
            id: user.id
        })

    } catch (error) {
        console.log('Error SignUp: ', error)
    }
}

const Login = async(req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        //Compare passwords

        if(!user) {
            return res.status(404).send('User not found')
        }

        const comparePassword = bcrypt.compareSync(req.body.password, user.password)

        if(comparePassword) {
            const payload = { email: user.email }
            const token = jwt.sign(payload, process.env.SECRET)
            return res.status(200).json({ 
                token,
                firstName: user.firstName,
                id: user.id  
            })
        } else {
            return res.status(404).json('Incorrect password')
        }

    } catch (error) {
        console.log('Error Login: ', error)
    }
}

module.exports = {
    SignUp,
    Login
}