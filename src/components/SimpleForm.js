import React, { useState } from 'react';

export const SimpleForm = () => {
    const [form, setForm] = useState({
        email: '',
        name: ''
    })

    const { name, email } = form;

    const handleForm = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>Hello</h1>
            <p>Hello World</p>
            <hr />
            <form>
                <div className='form-group'>
                    <input
                        className='form-control'
                        name='name'
                        type='text'
                        placeholder='Insert your name'
                        onChange={ handleForm }
                        value={ name }
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        name='email'
                        type='email'
                        placeholder='Insert your Email'
                        onChange={ handleForm } 
                        value={ email }
                    />

                </div>

            </form>
        </>
    );
};
