import React from 'react';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";

function SignUp() {
    const {register, handleSubmit} = useForm({mode: 'onBlur'});

    function onFormSubmit(data) {
        console.log(data);
    }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <input
                type="text"
                placeholder="Gebruikersnaam"
                {...register("gebruikersnaam", {
                    required: "gebruikersnaam vereist",
                    pattern: {
                        value: 3,
                        message: "Gebruikersnaam moet langer dan 3 karakters zijn",
                    }
                })}
            />
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
                type="button">
                Aanmelden
            </button>
        </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;