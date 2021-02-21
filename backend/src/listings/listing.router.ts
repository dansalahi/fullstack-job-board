import { Router } from 'express';
import { ListingsController } from './listings.controller'

const listingsRouter: Router = Router()

const listingsControllerInstance = new ListingsController()

listingsRouter.get('/', listingsControllerInstance.index)

export { listingsRouter }