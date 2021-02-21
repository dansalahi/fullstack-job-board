import { Request, Response } from 'express'


export class ListingsController {
    constructor() { }

    index(req: Request, res: Response) {
        const listings: [] = []
        res.send({ 'data': listings })
    }
}