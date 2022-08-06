import React, { useState } from 'react';

export const Form = () => {

    const [ form, setForm ] = useState({
        nombre: '',
        email: ''
    });

    const { nombre, email } = form;

    const handleInputChange = ({ target }) => {
        setForm({
            ...form,
            [target.name] : target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        console.log(form);
    }

    return(
        <>
            <h2>Formulario</h2>
            <hr />

            <form
                onSubmit={ handleSubmit }
            >
                <input
                    type="text"
                    name="nombre"
                    onChange={ handleInputChange }
                    value= { nombre }
                />

                <input
                    type="email"
                    name="email"
                    onChange={ handleInputChange }
                    value={ email }
                />

                <button
                    type="submit"
                >Enviar</button>
            </form>
        </>
    );
}