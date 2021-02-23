import React from 'react';
import RegisterForm from "../register-form/RegisterForm";
import './_main.scss';
import weather from '../../assets/img/weather.png';
import desk from '../../assets/img/desk.png';
import gallery from '../../assets/img/gallery.png';



export default function Main() {
    return (
        <div className='wrapper'>
            <div className="container">
                <div className='content'>
                    <RegisterForm />
                    <div className='images-for-tablet'>
                        <img src={desk} alt="desk"/>
                        <img src={weather} alt="weather"/>
                        <img src={gallery} alt="gallery"/>
                    </div>
                </div>
            </div>
        </div>
    );
}