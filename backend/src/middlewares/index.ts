import { Application } from 'express'
import { NotFoundHandler } from './notFoundHandler'
export default function (app: Application) {
    NotFoundHandler(app)
}