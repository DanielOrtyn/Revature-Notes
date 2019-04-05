

import express from 'express'
import { SpaceShip } from '../model/SpaceShip';


/**
 * Spaceship router will handle all requests with /spaceship
 */
export const spaceshipRouter = express.Router()


/**
 * find all spaceships
 * endpoint: /spaceships
 */
spaceshipRouter.get(``, (req, res) => {
    console.log(`retreiving all spaceships`)
    res.send('all spaceships')
})

/**
 * find specific spaceship
 * endpoint: /spaceships/:id
 */
spaceshipRouter.get(`/:id`, (req, res) => {
    console.log(`retreiving spaceship with id: ${req.params.id}`)
    res.send(`here is the spaceship with id: ${req.params.id}`)
})

/**
 * find specific spaceship
 * endpoint: /spaceships/owner/:id
 */
spaceshipRouter.get(`/owner/:id`, (req, res) => {
    console.log(`retreiving spaceship with owner: ${req.params.id}`)
    res.send(`here is the spaceship with spaceship: ${req.params.id}`)
})

/**
 * create a spaceship
 * endpoint: /spaceships
 */
spaceshipRouter.post(``, (req, res) => {
    let newSpaceShip = new SpaceShip(req.body[`shipId`], req.body[`name`],
        req.body[`weight`], req.body[`speed`],
        req.body[`description`], req.body[`owner`])
    console.log(newSpaceShip)
    res.status(201)
    res.send(newSpaceShip)
})

/**
 * update spaceship
 * endpoint: /spaceships
 */
spaceshipRouter.patch(``, (req, res) => {
    console.log(`recieved \'spaceships\' endpoint patch request`)
    res.send(`updated spaceship: `)
})


