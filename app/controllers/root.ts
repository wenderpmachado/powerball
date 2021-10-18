import { Request, Response } from 'express'

// Hello World on '/'
function root(req: Request, res: Response): void {
  res.json({ message: 'Hello World' })
}

export default root
