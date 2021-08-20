import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Stafflogin.css";
import axios from "axios";

const Stafflogin = (props) => {
    const [val,setval]=useState({
       email:"",
       password:""
    });
    const [fval,setfval]=useState({
        email:"",
        password:""
     });
    const func=(e)=>{
         const {name,value}=e.target;
         setval((prevval)=>{
             return{
                 ...prevval,
                 [name]:value
             }
         })
    }
    const func1=(e)=>{
         e.preventDefault();
         
         setfval({
             email:val.email,
             password:val.password
        })
        props.signIn(val.email,val.password)
        
      
        

    }
    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-8 mx-auto login_form">
                        <h3 className="staffloginheader">Staff-Login</h3>
                        <Form onSubmit={func1}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" 
                                   onChange={func}
                                   value={val.email}
                                   name="email"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" 
                                   onChange={func}
                                   value={val.password}
                                   name="password"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Log in
                            </Button>
                        </Form>


                    </div>
                </div>
            </div>

        </>
    )
}
export default Stafflogin;