import { App } from './app'
import AppWs from './appWs'
const port = 3333

const server = new App().server.listen(port, () => {
  console.log(`App Expresss is running port ==> ${port}`)
})

AppWs(server)
