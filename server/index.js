const express = require('express')
const app = express();
const { WebSocketServer } = require('ws')
const sockserver = new WebSocketServer({ port: 443 })

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log(`Listening on ${3000}`))



sockserver.on('connection', ws => {
 console.log('New client connected!')
 ws.send('connection established')
 ws.on('close', () => console.log('Client has disconnected!'))
 ws.on('message', data => {
   sockserver.clients.forEach(client => {
     console.log(`distributing message: ${data}`)
     client.send(`${data}`)
   })
 })
 ws.onerror = function () {
   console.log('websocket error')
 }
})
