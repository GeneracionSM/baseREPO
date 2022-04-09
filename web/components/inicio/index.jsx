import React from "react";

const Inicio = ({onRegisterClick}) => (
<div className="my-form offset-lg-1 col-lg-4">
    <div className="shadow-lg p-4 mb-5 bg-body rounded">
        <form name="f-login" method="post">
            <div id="form">
                <label htmlFor="username">Usuari:</label>
                <input
                    id="i-username"
                    name="username"
                    className="form-control padding"
                    required
                />
                <label htmlFor="password">Contrassenya:</label>
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
                <button 
                    type="button"
                    id="b-register"
                    className="my-outline-btn btn btn-outline-secondary padding padding-2"
                    href="#"
                    role="button"
                    onClick={onRegisterClick}
                >
                    Registra't
                </button>
            </div>
        </form>
    </div>
</div>
);

export default Inicio;