import Login from './Login';
import { authenticationService } from '../services/authentication';
import { Navigate } from 'react-router-dom';
import Home from './Home';
import { useState } from 'react';

const LoginPage = () => {
    const [isLogged, setIsLogged] = useState(window.localStorage.getItem('token'))
    const loginUser = (email, password) => {
        const userCredentials = {
            email,
            password
        };
        console.log("fonction loginUser lancée")
        authenticationService.login(userCredentials)
        .then(loginData => {
            window.localStorage.setItem('token', loginData.token)
            })
        .then(()=> console.log("data récupéré"))
        .then(() => {setIsLogged(window.localStorage.getItem('token'))})
    }

    
     
    return (
        <div className="App">
        <Login loginUser={(email, password) => loginUser(email, password)}/>
        {isLogged && (
          <Navigate to="/" replace={true} />
        )}
        </div>
    )


}
export default LoginPage;