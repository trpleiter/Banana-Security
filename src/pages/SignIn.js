import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../contexts/AuthContext";
import {useForm} from "react-hook-form";

function SignIn() {
    const {signIn} = useContext(AuthContext);
    const {register, handleSubmit} = useForm({mode: 'onBlur'});

    function onFormSubmit(data) {
       signIn(data.email)
       console.log(data);
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email vereist",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Ongeldige email",
                            }
                        })}
                    />

                    <input
                        type="password"
                        placeholder="Wachtwoord.."
                        {...register("wachtwoord", {
                            required: "Wachtwoord vereist",
                            minLength: {
                                value: 6,
                                message: "Je wachtwoord moet ten minste 6 karakters hebben"
                            }
                            ,
                            maxLength: {
                                value: 20,
                                message: "Je wachtwoord mag maximaal 20 karakters hebben"
                            }
                        })}
                    />
                <button
                    type="submit"
                    >Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;