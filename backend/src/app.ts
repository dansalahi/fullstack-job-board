import * as express from 'express'
import { Application } from 'express'

export class App {

    private app:Application
    private port:number

    constructor(port:number) {
        this.app = express()
        this.port = port
    }


    /*
        Start the application
    */
    start():void {
        this.app.listen(this.port,() => {
            console.log(`App is running on port ${this.port}`)
        })
    }
}