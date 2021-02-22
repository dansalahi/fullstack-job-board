import jwtDecode from 'jwt-decode'

export class AuthService {

    private tokenKey: string
    constructor() {
        this.tokenKey = 'token'
    }

    login(): void {

    }

    loginWithJwt(jwt: string) {
        localStorage.setItem(this.tokenKey, jwt)
    }

    register(): void {

    }

    logout(): void {
        localStorage.removeItem(this.tokenKey)
    }

    getCurrentUser() {
        try {
            const jwt: string = localStorage.getItem(this.tokenKey) as string
            return jwtDecode(jwt)
        }
        catch (ex) {
            return null
        }
    }

    getJwt(): string {
        return localStorage.getItem(this.tokenKey) as string
    }
}