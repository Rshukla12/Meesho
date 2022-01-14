import styles from "./InputField.module.css";
import { useEffect, useRef, useState } from "react";

const InputField = ({
    onChange,
    label,
    value,
    type="text",
    error="This field is required",
    isError=false,
    required=false,
    maxLen,
    name,
    initiallyFocused=false
}) => {
    const [isNotNumber, setIsNotNumber] = useState(false);
    const inputRef = useRef(null);
    
    const handleChange = (e) => {
        if (type === "number" && Number.isNaN(Number(e.target.value))) {
            setIsNotNumber(true);
            return;
        }
        onChange(e);
        setIsNotNumber(false);
    };

    useEffect(()=> {
        initiallyFocused && inputRef.current.focus();
    }, []);

    return (
        <div 
            className={`${styles.root} ${ isError && styles.error }`} 
            onClick={()=> inputRef.current && inputRef.current.focus()}
        >
            <input 
                name={name}
                ref={inputRef} 
                required={required} 
                className={styles.input} 
                type="text"  
                value={value} 
                maxLength={maxLen}
                onChange={handleChange} 
            />
            <label 
                className={styles.label} 
                htmlFor={label}
            >
                {label}
            </label>
            {isError ? <p>{error}</p> : isNotNumber && <p>Please enter valid number</p>}
        </div>
    )
};

export default InputField;