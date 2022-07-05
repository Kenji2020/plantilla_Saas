import React from "react";
import {auth, db} from "./firebase";
import {useNavigate} from "react-router-dom";
export default function RegisterForm() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigate();
    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
            })
            .catch(error => alert(error.message))
    }
    return(
        <div className="register-form my-5">
            {/* Register Form */}
            <form onSubmit={e => { e.preventDefault(); }} >
                <form>
                    <div className="form-group mb-3"/>
                    <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email Address" required />

                    <div className="form-group mb-3">
                        <input className="form-control" value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" required />
                    </div>

                </form>
                <div className="form-group mb-3">
                    <input className="form-control" type="text" placeholder="Full Name" required />
                </div>
                <button className="btn btn-primary btn-block" onClick={()=>
                {
                    handleSignUp()
                    navigation('/blog-2')
                }}>Register</button>
            </form>
        </div>
    )
}
