import { Request, Response } from 'express'


export class CompanyController {
    constructor() { }

    index(req: Request, res: Response) {
        const companies: [] = []
        res.send({ 'data': companies })
    }
}