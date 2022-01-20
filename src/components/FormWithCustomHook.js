import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const [ form, handleInputChange ] = useForm({
        email: '',
        name: '',
        password: ''
    })

    const { name, email, password } = form;

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log( form );
    }


    useEffect(()=>{
        console.log('Email change!!!');
    }, [email])

    return (
        <>
            <h1>Form With Custom Hooks</h1>
            <p>Hello World</p>
            <hr />
            <form onSubmit={ handleFormSubmit }>
                <div className='form-group'>
                    <input
                        className='form-control'
                        name='name'
                        type='text'
                        placeholder='Insert your name'
                        onChange={ handleInputChange }
                        value={ name }
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        name='email'
                        type='email'
                        placeholder='Insert your Email'
                        onChange={ handleInputChange } 
                        value={ email }
                    />

                </div>

                <div className='form-group'>
                    <input
                        className='form-control'
                        name='password'
                        type='password'
                        placeholder='Insert your Pass'
                        onChange={ handleInputChange } 
                        value={ password }
                    />

                </div>

                <button type="submit" className="btn btn-success">
                    Save
                </button>

            </form>

        </>
    );
};
