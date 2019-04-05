

import express from 'express'
import { users } from '../state';
import { User } from '../model/user';
import { authMiddleware } from '../middleware/aut.middleware';


/**
 * User router will handle all requests with /users
 */
export const userRouter = express.Router()


/**
 * find all users
 * endpoint: /users
 */
userRouter.get(``,
    [authMiddleware(['admin']),
    (req, res) => {
        console.log(`retreiving all users`)
        res.send(users)
    }
    ]
)

/**
 * find specific user
 * endpoint: /users/:id
 */
userRouter.get(`/:id`, (req, res) => {
    const id: number = req.params.id
    console.log(`retreiving user with id: ${req.params.id}`)
    const user = users.find(u => u.userId === id)
    res.send(user)
})

/**
 * find specific user
 * endpoint: /users/username/:username
 */
userRouter.get(`/username/:username`, (req, res) => {
    console.log(`retreiving user with username: ${req.params.username}`)
    res.send(`here is the user with username: ${req.params.username}`)
})

/**
 * create a user
 * endpoint: /users
 */
userRouter.post(``, (req, res) => {
    console.log(`recieved \'users\' endpoint post request`)
    let newUser = new User()
    newUser[`userId`] = req.body[`userId`]
    newUser[`username`] = req.body[`username`]
    newUser[`password`] = req.body[`password`]
    newUser[`name`] = req.body[`name`]
    users.push(newUser)
    res.send(newUser)
})

/**
 * update user
 * endpoint: /users
 */
userRouter.patch(``, (req, res) => {
    console.log(`recieved \'users\' endpoint patch request`)
    const id: number = req.body.userId
    console.log(`retreiving user with id: ${req.params.id}`)
    const user = users.find(u => u.userId === id)
    if (!user) {
        res.sendStatus(404)
    }
    else {
        for (let field in user) {
            if (req.body[field] !== undefined) {
                user[field] = req.body[field]
            }
        }
        res.send(`updated user: ${id}`)
    }
})


userRouter.post(`/login`, (req, res) => {
    console.log(`login request made`)
    const { username, password } = req.body
    const user = users.find(u => u.username === username && u.password === password)

    if (user) {
        req.session.user = user
        res.end()
    }
    else {
        res.sendStatus(401)
    }
})