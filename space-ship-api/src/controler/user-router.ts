

import express from 'express'


/**
 * User router will handle all requests with /users
 */
export const userRouter = express.Router()


/**
 * find all users
 * endpoint: /users
 */
userRouter.get(``, (req, res) => {
    console.log(`retreiving all users`)
    res.send('all users')
})

/**
 * find specific user
 * endpoint: /users/:id
 */
userRouter.get(`/:id`, (req, res) => {
    console.log(`retreiving user with id: ${req.params.id}`)
    res.send(`here is the user with id: ${req.params.id}`)
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
    for (let key in req.body) {
        console.log(`posted user is: ${key}: ${req.body[key]}`)
    }
    res.send(`saved user`)
})

/**
 * update user
 * endpoint: /users
 */
userRouter.patch(``, (req, res) => {
    console.log(`recieved \'users\' endpoint patch request`)
    res.send(`updated user: `)
})


