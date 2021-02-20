import { Request, Response } from 'express'


export class UsersController {
    constructor() { }

    index(req: Request, res: Response) {
        const users: [] = []
        res.send({'data':users})
    }

    store(req: Request, res: Response) {
        
    }
}