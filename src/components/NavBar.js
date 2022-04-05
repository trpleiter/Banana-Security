import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useHistory, Link} from 'react-router-dom';
import {AuthContext} from "../contexts/AuthContext";

function NavBar() {
    const history = useHistory();
    const {loggedIn, logOut, user} = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>
            <p>{user}</p>
            {!loggedIn &&
            <div>
                <button
                    type="button"
                    onClick={() => history.push('/signin')}
                >
                    Log in
                </button>
                <button
                    type="button"
                    onClick={() => history.push('/signup')}
                >
                    Registreren
                </button>
            </div>}

            {loggedIn &&
            <button
                type="button"
                onClick={logOut}
            >
                Logout
            </button>}


        </nav>
    );
}

export default NavBar;