import React from 'react';
import executeQuery from "../../../lib/db";
import moment from "moment";

const Inicio = () => (
    <div className="offset-lg-1 col-lg-4 form">
    <div className="shadow-lg p-4 mb-5 bg-body rounded">
        <form name="f-login" method="post">
            <div id="form">
                <label for="username">Usuari:</label>
                <input
                    id="i-username"
                    name="username"
                    className="form-control padding"
                    required
                />
                <label for="password">Contrassenya:</label>
                <input
                    id="i-password"
                    type="password"
                    name="password"
                    className="form-control padding"
                    required
                />
                <button
                    id="b-login"
                    type="submit"
                    className="my-btn btn btn-secondary padding padding-2"
                >
                    Inicia sessió
                </button>
                &nbsp;
                <a
                    id="b-register"
                    className="my-outline-btn btn btn-outline-secondary padding padding-2"
                    href="#"
                    role="button"
                >
                    Registra't
                </a>
            </div>
        </form>
    </div>
</div>
);

export default Inicio;