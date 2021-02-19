import React from 'react'
import { AuthService } from '../../services/authService'
class Logout extends React.Component {

    componentDidMount(): void {
        new AuthService().logout()
        window.location.href = '/'
    }
    render() {
        return null;
    }
}

export default Logout;