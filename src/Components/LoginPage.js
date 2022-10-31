import Login from './Login';
import { authenticationService } from '../services/authentication';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import { useEffect } from 'react';

const LoginPage = ({user}) => {
    const loginUser = (email, password) => {
        const userCredentials = {
            email,
            password
        };

        authenticationService.login(userCredentials)
        .then(loginData => window.localStorage.setItem('token', loginData.token));
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            console.log("connecté")
            navigate("/");
        }
    },[user])


    return (
    <div className="App">
    <Login loginUser={(email, password) => loginUser(email, password)}/>
    </div>
    );
}
export default LoginPage;