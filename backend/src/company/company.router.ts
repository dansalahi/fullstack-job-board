import { Router } from 'express';
import { CompanyController } from './company.controller'

const companyRouter: Router = Router()
const companyControllerInstance = new CompanyController()

// Setup Routes
companyRouter.get('/', companyControllerInstance.index)

export { companyRouter }