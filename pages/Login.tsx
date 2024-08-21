import FormInput from '../components/loginComponents/formInput';
import { useState } from "react";
import Link from "next/link";
import styles from './login.module.css';

const LoginForm = () => {
  const [values, setValues] = useState<{
    [key: string]: String;
  }>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: showPassword ? "text" : "password",
      placeholder: "Password",
      required: true,
    }
  ]

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles['main-container-login-form']}>
      <form className={styles['form-main-login']}>
      <h1 className={styles['h1-main-login']}>Login</h1>

      <p className={styles['do-you-have-account']}>
        Don't have an account?   
        <Link className={styles["link-decoration"]} href="/Register"><b>  Register here!</b></Link></p>

      <p className={styles['do-you-have-account']}>Or back to the <Link className={styles["link-decoration"]} href="/app/layout"><b>Home!</b></Link></p>

    {inputs.map((input) => (
      <FormInput
        className={styles['input-main-login']}
        key={input.id}
        {...input}
        value={values[input.name]}
        onChange={onChange}
      />
    ))}
    <div className={styles['show-password-container']}>
      <input
        className={styles['show-password-checkbox']}
        type="checkbox"
        id="showPassword"
        checked={showPassword}
        onChange={toggleShowPassword}
      />
      <label className={styles['label-main-login']} htmlFor="showPassword">Show Password</label>
    </div>
    <button className={styles['button-main-login']}>Submit</button>
  </form>
</div>

  );
};

export default LoginForm;
