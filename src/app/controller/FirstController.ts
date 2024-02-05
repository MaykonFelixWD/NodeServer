import { Request, Response } from 'express'

class FirstController {
  public GET(req: Request, res: Response) {
    console.log(req)
    return res.json({
      response: 'Hello GET World'
    })
  }
}
export const firstController = new FirstController()
