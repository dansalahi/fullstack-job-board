import {
    Application,
    Request,
    Response,
    NextFunction
} from 'express'

export function NotFoundHandler(app: Application) {
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.status(404).send({
            status: 404,
            error: 'Not Found',
            message: 'Requested resource could not be found on this server!'
        })
    })
}
