import Login from './Login';
import { authenticationService } from '../services/authentication';
import { Navigate } from 'react-router-dom';
import Home from './Home';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import logo from './../assets//logo.jpg'; 


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
        .catch((error) => {setIsLogged(null); alert("probleme de connexion - " + error)})
    }

    
     
    return (
        <div className="App d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <Card>
        <Card.Header><img src={logo} alt="captgym-logo" width={200}/></Card.Header>
        <Card.Body>
        <Login loginUser={(email, password) => loginUser(email, password)}/>
        {isLogged && (
          <Navigate to="/" replace={true} />
        )}
        </Card.Body>
        </Card>
        </div>
    )


}
export default LoginPage;