import Login from './Login';
import { authenticationService } from '../services/authentication';
const LoginPage = () => {
const loginUser = (email, password) => {
const userCredentials = {
email,
password
};

authenticationService.login(userCredentials)
.then(loginData => window.localStorage.setItem('token', loginData.token));
}

return (
<div className="App">
<Login loginUser={(email, password) => loginUser(email, password)}/>
</div>
);
}
export default LoginPage;