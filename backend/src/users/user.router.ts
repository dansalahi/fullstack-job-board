import { Router } from 'express'
import { UsersController } from './users.controller'

const usersRouter: Router = Router()

const usersControllerInstance = new UsersController();

usersRouter.get('/', usersControllerInstance.index)

export { usersRouter }