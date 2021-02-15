import axios, { AxiosInstance } from 'axios'

export class HttpService {

    private apiEndPoint: string = ``
    private client: AxiosInstance

    constructor() {
        this.client = axios.create({ baseURL: this.apiEndPoint, headers: {} })
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