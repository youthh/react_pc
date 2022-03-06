import React from "react";
import './auth.css'
import GoogleAuth from "./GoogleAuth";



let LoginF = () => {

    return (
        <div id="login" className="formLog">
                <form method="get">

                        <div className="input">
                            <input type="Email" placeholder="email" name={"email"} />
                        </div>
                          <div className="input">
                              <input type="password" name={"password"} placeholder={"password"} />
                          </div>
                        <GoogleAuth/>
                </form>
        </div>
    )
}




export default LoginF;