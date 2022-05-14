import{Link} from "react-router-dom";
import React,{useState} from "react";
import './Registration.css';
import validation from './validation';
function Registration() {
  
  const [values,setValues]=useState({
      usertype:"",
      name:"",
      email:"",
      phoneNumber:"",
      password:"",
      confirmPassword:""
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
          <Link to="/successful">  <input type="submit" value="Update"/> </Link>
  };

  return (
    <div className="container">
          <div className="title">Registration</div>
    <form >
          <div className="user-details">
          <div className="input-box">
                 <label className="details">Register as</label>
                 <input type="text" 
                 placeholder="Enter doctor or patient" 
                 name="usertype" 
                 value={values.usertype}
                 onChange={handleChange} />
                 {errors.usertype && <p className="error">{errors.usertype}</p>}
             </div>
             <div className="input-box">
                 <label className="details">Name</label>
                 <input type="text" 
                 placeholder="Enter your name" 
                 name="name" 
                 value={values.name}
                 onChange={handleChange}/>
                 {errors.name && <p className="error">{errors.name}</p>}
             </div>
             <div className="input-box">
                 <label className="details">Email</label>
                 <input type="email" 
                 placeholder="Enter your email"
                 name="email" 
                 value={values.email}
                 onChange={handleChange}/>
                 {errors.email && <p className="error">{errors.email}</p>}
             </div>
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
             <div className="input-box">
                 <label className="details">Confirm Password</label>
                 <input type="password" 
                 placeholder="Re-enter password"  
                 name="confirmPassword" 
                 value={values.confirmPassword}
                 onChange={handleChange}/>
                 {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
             </div>
             
          </div>
          <div className="button">
          <input type="submit" value="Register" onClick={handleFormSubmit}/>
          <Link to="/">Login</Link>
          </div>
    </form>
    </div>
  );
}

export default Registration;