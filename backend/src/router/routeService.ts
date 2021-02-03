import { RouterEngine } from './router';
import { Application, Router } from 'express'

export class RouteService {

    private app: Application
    private router: RouterEngine

    constructor(app: Application) {
        this.app = app
        this.router = new RouterEngine()
        this.bindRouters()
    }

    bindRouters(): void {
        // this.router.registerRouter('/api/v1/users')
    }

    run(): void {
        this.router.getRouters().forEach((router: Router, route: string) => {
            this.app.use(route, router)
        })
    }
}