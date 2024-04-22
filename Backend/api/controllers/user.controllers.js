const User = require('../models/user.model.js')

async function getAllUsers(req, res) {
    try {
        const users = await User.findAll({ paranoid: false})
        if(users) {
            return res.status(200).json(users)
        } else {
            return res.status(404).send('No users found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id)
        if(user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createUser(req, res) {
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            email: req.body.email,
            password: req.body.password
        })

        return res.status(200).json({
            message: 'User created',
            user: user
        })

    } catch (error) {
        res.status(500).send(error.message)
    }
}

/* TODO: TERMINAR UPDATE-USER */

async function updateUser(req, res) {
    console.log('Funcion por hacer')
}

async function deleteUser(req, res) {
    try {
        const user = await User.destroy({
            where: {
                id: req.params.id
            }
        })

        if(user) {
            return res.status(200).json({
                message: 'User deleted',
                user: user
            })
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
}