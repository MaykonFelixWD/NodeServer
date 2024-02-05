import { Request, Response } from 'express'

class SecondController {
  public GET(req: Request, res: Response) {
    console.log(req)
    return res.json({
      response: 'Hello SECOND GET World'
    })
  }
  public postqualquer(req: Request, res: Response) {
    console.log(req)
    return res.json({
      response: 'Hello POST QUALQUER World'
    })
  }
}
export const secondController = new SecondController()
