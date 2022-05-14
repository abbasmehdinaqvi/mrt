import validation from './validation';
import React,{useState} from "react";
import{Link} from "react-router-dom";
function Login() {
    const [values,setValues]=useState({
        phoneNumber:"",
        password:"",
    });
    const[errors,setErrors]=useState({});

    const handleFormSubmit = (event) =>{
      event.preventDefault();
      setErrors(validation(values));
    };
    const handleChange = (event) => {
        setValues(
            {
                ...values,
                [event.target.name]:(event.target.value).trim(),
            });
            console.log(values);
    };
    return (
      <div className="container">
            <div className="title">Login</div>
      <form >
            <div className="user-details">
               <div className="input-box">
               <label className="details">Phone number</label>
                 <input type="number" 
                 placeholder="Enter your number" 
                 name="phoneNumber" 
                 value={values.phoneNumber}
                 onChange={handleChange} />
                 {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
               </div>
               <div className="input-box">
               <label className="details">Password</label>
                 <input type="password" 
                 placeholder="Enter your password" 
                 name="password" 
                 value={values.password}
                 onChange={handleChange} />
                 {errors.password && <p className="error">{errors.password}</p>}
               </div>               
            </div>
            <div className="button">
                <input type="submit" value="Login" onClick={handleFormSubmit}/>
                <Link to="/registration">New User</Link>
            </div>
      </form>
      </div>
    );
  }
  
  export default Login;