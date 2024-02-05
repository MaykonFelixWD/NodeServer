import WebSocket from 'ws'

function onError(ws: any, err: any) {
  console.error(`onError: ${err.message}`)
}

function onMessage(ws: any, data: any) {
  console.log(`onMessage: ${data}`)
  ws.send(`recebido!, ${data}`)
}

function onConnection(ws: any, req: any) {
  ws.on('message', (data: any) => onMessage(ws, data))
  ws.on('error', (error: any) => onError(ws, error))
  console.log(`onConnection`)
}

export default (server: any) => {
  const wss = new WebSocket.Server({
    server
  })

  wss.on('connection', onConnection)

  console.log(`App Web Socket Server is running!`)
  return wss
}
