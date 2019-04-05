import express from "express"
import bodyParser from 'body-parser'
import { SpaceShip } from "./SpaceShip"

const app = express()

app.use((req, res, next) => {
    console.log(`req processed with url: ${req.url} and method: ${req.method}.`)
    next()
})

app.use(bodyParser.json())

app.get(`/test`, (req, res) => {
    console.log('req processed.')
    res.send(`Here is the response data`)
})

app.post(`/test`, (req, res) => {
    console.log('posted to test.')
    let body = req.body
    console.log(body)
    res.send(`saved test call`)
})


app.get('/spaceships', (req, res) => {
    console.log(`spaceships get request recieved`)
    res.json([new SpaceShip(`Eagle 5`, `SpaceRV`), new SpaceShip(`Death Star`, `Planatoid`)])
})

app.get('/hello', (req, res) => {
    console.log(`hello get request recieved`)
    res.json(`Hello Person!!!`)
})

app.listen(8080)