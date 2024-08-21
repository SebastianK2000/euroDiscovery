import { useState } from "react";
import styles from '../../pages/login.module.css';

const FormInput = (props: any) => {

  const [focused, setFocused] = useState(false);
  const {label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div>
      <label className={styles['label-main-login']}>{label}</label>
      <input
      className={styles['input-main-login']}
      {...inputProps} 
      onChange={onChange}
      onBlur={handleFocus}
      onFocus={() => 
        inputProps.name === "confirmPassword" && setFocused(true)
      }
      focused={focused.toString()}
      />
      <span className="span-for-input"></span>
    </div>
  );
};

export default FormInput;