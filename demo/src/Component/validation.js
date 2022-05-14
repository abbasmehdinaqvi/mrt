
const validation= (values)=>{

    let errors={};
    
    if(!values.name){errors.name="Name is required.";}

   if(!values.usertype){errors.usertype="Usertype is required.";}
   else if(!(values.usertype.trim().toLowerCase()==="doctor" || values.usertype.trim().toLowerCase()==="patient") ){errors.usertype="Usertype must be doctor or patient.";}
    if(!values.phoneNumber){errors.phoneNumber="PhoneNumber is required.";}

    if(!values.email){errors.email="Email is required";}
    else if(!/\S+@\S+\.\S+/.test(values.email)){errors.email="Email is invalid.";}

    if(!values.password){errors.password="Password is required.";  }
    else if(values.password.length<5){errors.password="Password must be more than five characters.";  }

    if(!values.confirmPassword){errors.confirmPassword="ConfirmPassword is required.";  }
    else if(values.password!==values.confirmPassword){errors.confirmPassword="ConfirmPassword must be same as Password."};

   return errors;
}

export default validation;