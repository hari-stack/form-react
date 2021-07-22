import React, { useState } from "react";
import "./index.css";

function App(){
  const [values,setValues] = useState({
    firstname:" ",
    lastname:" ",
    email:" "
  });

const [submitted, setSubmitted] = useState(false)
const [valid, Setvalid] = useState(false)

const handleFName = (event) => {
  setValues({...values, firstname: event.target.value})
}

const handleLName = (event) => {
  setValues({...values, lastname: event.target.value})
}

const handleEmail = (event) => {
  setValues({...values, email: event.target.value})
}

const handlesub = (event) =>{
  event.preventDefault();
  if(values.firstname && values.lastname && values.email){
    Setvalid(true);
  }
  setSubmitted(true);
}

return (
  <div class="form-container">
    <form class="register-form" onSubmit={handlesub}>
        
        {submitted ? <div class="success-message">Success! Thank you for registering</div> : null}
        <input
          onChange={handleFName}
          value={values.firstname}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />

        {submitted && values.firstname ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          onChange={handleLName}
          value={values.lastname}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        
        {submitted && values.firstname ? <span id="first-name-error">Please enter a last name</span> : null}
        <input
          onChange={handleEmail}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        
        {submitted && values.firstname ? <span id="first-name-error">Please enter a email</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );

}


export default App;