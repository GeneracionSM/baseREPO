import React from 'react';
import executeQuery from "../../../lib/db";
import moment from "moment";

const Register = () => (
<div className="col-lg-6 form">
    <div id="my-form" className="row form">
        <div className="col-lg-11 offset-lg-1">
            <div className="shadow-lg p-4 bg-body rounded">
                <form method="post">
                    <label>Nom<span className="c-span">*</span>:</label>
                    <input name="name" className="form-control" placeholder="Nombre" required />
                    <div className="row">
                        <div className="col-md-6">
                            <label className="padding-2">Primer cognom<span className="c-span">*</span>:</label>
                            <input name="surname1" className="form-control" placeholder="Primer cognom" required />
                        </div>
                        <div className="col-md-6">
                            <label className="padding-2">Segon cognom:</label>
                            <input name="surname2" className="form-control" placeholder="Segon cognom" />
                        </div>
                    </div>
                    
                    <label className="padding-2">Data de naixament<span className="c-span">*</span>:</label>
                        <input type="date" name="dateofbirth" className="form-control" min="1920-1-01" max="2023-12-31" required />
                            <label className="padding-2">Usuari<span className="c-span">*</span>:</label>
                            <input name="username" className="form-control" placeholder="Usuari" required />
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="padding-2">Contrassenya<span className="color: pur;">*</span>:</label>
                                        <input type="password" name="password" className="form-control" placeholder="Contrassenya" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="padding-2">Repeteix la contrassenya<span className="c-span">*</span>:</label>
                                        <input type="password" name="password2" className="form-control" placeholder="Contrassenya" required />
                                    </div>
                                </div>
                            <button type="submit" className="b-width my-btn btn btn-secondary padding-2">Registra't</button>
                </form>
            </div>
        </div>
    </div>
</div>
);

export default Register;

export async function createUser(
    nombre,
    apellido_uno,
    apellido_dos,
    fecha_nacimiento,
    alias,
    correo,
    password
) {
    const user = {
        name: nombre,
        ap_uno: apellido_uno,
        ap_dos: apellido_dos,
        fc_nc: fecha_nacimiento,
        al: alias,
        email: correo,
        pass: password
    };
    try {
        const result = await executeQuery({
            query: "INSERT INTO usuario (nombre,apellido_1,apellido_2,mail,password,fecha_nacim,username) VALUES (?,?,?,?,?,?,?)",
            values: [
                user.name,
                user.ap_uno,
                user.ap_dos,
                user.email,
                user.pass,
                user.fc_nc,
                user.al
            ]
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }

    return user;
}