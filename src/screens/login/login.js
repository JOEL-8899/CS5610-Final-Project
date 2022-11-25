import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import {Button, Form, Stack} from "react-bootstrap";
import 'bootswatch/dist/slate/bootstrap.min.css';
function Login(){
    return(
        <div className="loginpage">
        <Form style={{height : "70%",width : "50%", position : "absolute", top : "15%", left : "25%",
            backgroundColor : "lightcyan",padding : 50,paddingTop:40, borderRadius : 15}}>
            <img src="https://tinyurl.com/3fyje8w8" style={{height : 100, width : 100}}/>
                <div className="input-group mt-5">
                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                    <div className="form-floating ">
                        <input required={true} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">username</label>
                    </div>
                </div>
            <br/>
                <div className="input-group mb-4">
                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                    <div className="form-floating">
                        <input required={true} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">password</label>
                    </div>
                </div>
            <Button variant="primary" type="submit">
                Sign In
            </Button>
            <br/>
            <p></p>
            <a href="#" style={{color : "black"}}>Forgot Password?</a>
            <br/>
            <a href="#" style={{color:"black"}}>Register</a>
        </Form>

        </div>
    );
}

export default Login;