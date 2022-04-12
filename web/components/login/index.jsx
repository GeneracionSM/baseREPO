import React from "react";
import executeQuery from "../../../lib/db";
import moment from "moment";

const Login = ({onRegisterClick}) => (
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

export default Login;

export async function autenticateUser(mail, password) {
    try {
        const result = await executeQuery({
            query: "SELECT idUsuario FROM usuario WHERE mail = ? AND password = ?",
            values: [mail, password]
        });

        console.log(result);
        return user;
    } catch (error) {
        console.log(error);
    }
}

export async function emotionLogin(idUsuario, idEmocion) {
    try {
        const result = await executeQuery({
            query: "INSERT INTO registroemocion (idUsuario, idEmocion, data) VALUES (?,?,?)",
            values: [
                idUsuario,
                idEmocion,
                "",
                moment().format("YYYY-MM-DD HH:mm:ss")
            ]
        });
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function emotionLogout(idUsuario, idEmocion) {
    try {
        const result = await executeQuery({
            query: "INSERT INTO registroemocion (idUsuario, idEmocion, data) VALUES (?,?,?)",
            values: [
                idUsuario,
                idEmocion,
                "",
                moment().format("YYYY-MM-DD HH:mm:ss")
            ]
        });
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}