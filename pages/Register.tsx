import { useState } from "react";
import FormInput from "../components/loginComponents/formInput";
import Link from "next/link";

import styles from './/register.module.css'

const App = () => {

  const [values, setValues] = useState<{
    [key: string]:String;
  }>({
    fullname: "",
    email: "",
    username: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Full Name",
      errorMessage: "Full name should be 3-26 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]{3,26}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      required: true,
    },
  ]

  const displayError = (message: string) => {
    alert(message);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      displayError( "Passwords don't match!");
      return;
    }
  };

  const onChange = (e:any) => {
    setValues({ ...values, [e.target.name]: e.target.value});
  };

  return (
    <div className={styles["main-container-register-form"]}>
      <form className={styles["form-main-register"]} onSubmit={handleSubmit}>
        <h1 className={styles["h1-main-register"]}>Register</h1>
        <p className={styles["do-you-have-account"]}>Do you have account?<Link className={styles["link-decoration"]} href="Login" ><b>  Login there!</b></Link></p>
        <p className={styles['do-you-have-account']}>Or back to the <Link className={styles["link-decoration"]} href="/app/layout"><b>Home!</b></Link></p>
        {inputs.map((input) => (
          <FormInput
           key={input.id} 
           {...input} 
           value={values[input.name]} 
           onChange={onChange} 
           />
        ))}
        <button className={styles["button-main-register"]}>Submit</button>
      </form>
    </div>
  );
};

export default App;