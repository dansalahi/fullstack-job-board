import { HttpService } from './httpService'
import { apiUrl } from './../config.json'
import jwtDecode from 'jwt-decode'
export class AuthService {
  private tokenKey: string
  private apiEndpoint: string
  private http: HttpService

  constructor() {
    this.http = new HttpService()
    this.http.setJwt(this.getJwt())

    this.tokenKey = 'token'
    this.apiEndpoint = apiUrl + '/auth'
  }

  loginWithJwt(jwt: string) {
    localStorage.setItem(this.tokenKey, jwt)
  }

  async login() {
    // const { data: jwt } = await this.http.post(this.apiEndpoint, {
    //   email: string,
    //   password: string,
    // })
    // localStorage.setItem(this.tokenKey, jwt)
  }

  register(): void {}

  logout(): void {
    localStorage.removeItem(this.tokenKey)
  }

  getCurrentUser() {
    try {
      const jwt: string = localStorage.getItem(this.tokenKey) as string
      return jwtDecode(jwt)
    } catch (ex) {
      return null
    }
  }

  getJwt(): string {
    return localStorage.getItem(this.tokenKey) as string
  }
}
