import { config } from 'dotenv'
config()

import { App } from './app'

const port:number = 5000
const application = new App(port)
application.start()