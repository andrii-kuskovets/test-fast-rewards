import React, {useState} from "react";
import Icon from "../icon/Icon";
import '../register-form/_register-form.scss';

export default function RegisterForm() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [value, setValue] = useState({});
    const [typeError, setTypeError] = useState({email: '', password: ''});

    const handleChange = event =>  {
        event.persist();
        setValue(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    const handleSubmit = event => {
        if(!validateForm()) {
            event.preventDefault();
        } else {
            alert(`Email: ${value.email}, Password: ${value.password}`);
            setValue('')
        }
        event.preventDefault();
    }

    const validateForm = () => {
        if(!value.email || !value.password) {
            if (!value.email) {
                setTypeError(prevState => { return {...prevState, email: 'Email required'}})
            }
            if (!value.password) {
                setTypeError(prevState => { return {...prevState, password: 'Password required'}})
            }
            return false;
        }else if(typeError.email !== '' || typeError.password !== '') {
            return false;
        }
        return true;
    }

    const onFocus = (event) => {
        let targetElement = event.target.name;
        if(typeError[targetElement] !== '') {
            event.persist();
            setValue(inputs => ({...inputs, [targetElement]: ''}));
            setTypeError(inputs => ({...inputs, [targetElement]: ''}));
        }
    }

    const showPassword = () => {
        setPasswordShown(!passwordShown);
    }

    return (
        <form action="#" className='form'>
            <h1 className='form__title'>Login</h1>
            <div className={typeError.email !== '' ? 'form__group form__group_error' : 'form__group'}>
                <input onFocus={onFocus} className='form__input' placeholder='Email address' name='email' type="text" value={value.email || ''} onChange={handleChange}/>
                <span className='form__message-error'>{typeError.email}</span>
            </div>
            <div className={typeError.password !== '' ? 'form__group form__group_error' : 'form__group'}>
                <div className='form__password'>
                    <input onFocus={onFocus} className='form__input' placeholder='Password' name='password' type={passwordShown ? "text" : "password"} value={value.password || ''} onChange={handleChange}/>
                    <span onClick={showPassword}><Icon icon='eye'/></span>
                </div>
                <span className='form__message-error'>{typeError.password}</span>
            </div>
            <button type='submit' className='form__btn' onClick={handleSubmit}>
                <span>Log in</span>
            </button>
            <div className='form__description'>
                <a href="#">Forgot your password?</a>
                <p>Don’t have an account yet? <a href="#">Register</a></p>
            </div>
        </form>
    )
}