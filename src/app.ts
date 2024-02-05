import express from 'express'
import { router } from './router'
// import helmet from 'helmet'
import cors from 'cors'

export class App {
  public server: express.Application

  constructor() {
    this.server = express()
    this.middleware()
    this.router()
  }

  private middleware() {
    this.server.use(express.json())
    this.server.use(cors({ origin: '*' }))
    // this.server.use(helmet())
  }

  private router() {
    this.server.use(router)
  }
}
