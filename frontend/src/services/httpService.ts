import axios, { AxiosInstance } from 'axios'
import { AuthService } from './authService'
export class HttpService {

    private apiEndPoint: string = ``
    private authService: AuthService
    private client: AxiosInstance

    constructor() {
        this.client = axios.create({ baseURL: this.apiEndPoint, headers: {} })
        this.authService = new AuthService()
        this.setHeaders()
    }

    setHeaders(): void {
        axios.defaults.headers.common['x-auth-token'] = this.authService.getJwt()
    }

    get() {

    }

    post() {

    }

    put() {

    }

    delete() {

    }


}