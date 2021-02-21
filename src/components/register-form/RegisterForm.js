import React, {useState} from "react";
import Icon from "../icon/Icon";
import '../register-form/_register-form.scss';

export default function RegisterForm() {
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

    return (
        <form action="#" className='form'>
            <div className={typeError.email !== '' ? 'form__group form__group_error' : 'form__group'}>
                <input onFocus={onFocus} className='form__input' placeholder='Email address' name='email' type="text" value={value.email || ''} onChange={handleChange}/>
                <span className='form__message-error'>{typeError.email}</span>
            </div>
            <div className={typeError.password !== '' ? 'form__group form__group_error' : 'form__group'}>
                <input onFocus={onFocus} className='form__input' placeholder='Password' name='password' type="password" value={value.password || ''} onChange={handleChange}/>
                <span className='form__message-error'>{typeError.password}</span>
            </div>
            <button type='submit' className='btn btn_medium' onClick={handleSubmit}>
                <span>Log in</span>
            </button>
        </form>
    )
}