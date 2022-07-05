import { Link } from "react-router-dom";
import {auth,db} from "./firebase.js";
import React from "react"
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigate()
    return(
        <div className="register-form my-4 my-lg-5">
            {/* Login Form */}
            <form>
                <div className="form-group mb-3"/>
                    <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email Address" required />

                <div className="form-group mb-3">
                    <input className="form-control" value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" required />
                </div>

            </form>
            <button className="btn btn-primary btn-block" onClick={()=>{
                auth.signInWithEmailAndPassword(email, password)
                    .then(()=>{
                        db.collection('userNames').onSnapshot(snapshot=>{
                            snapshot.docs.forEach(doc=>{
                                if(doc.data().correo === email) {
                                    console.log(doc.data().userName)
                                    navigation('/Home')
                                }
                            })
                        })
                    })
                    .catch(error=>{
                        console.log(error);
                    });
            }}>Iniciar sesión</button>

            {/* Login Meta */}
            <div className="login-meta-data d-flex align-items-center justify-content-between">
                <div className="form-check mt-3">
                    <input className="form-check-input" id="rememberMe" type="checkbox" defaultValue defaultChecked />
                    <label className="form-check-label" htmlFor="rememberMe">Keep me logged in</label>
                </div>
                <Link className="forgot-password mt-3" to="/forget-password">Forgot Password?</Link>
            </div>
        </div>
    )
}
