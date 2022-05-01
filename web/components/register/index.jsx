import React from "react";
import executeQuery from "../../../lib/db";
import moment from "moment";
import { FormControl, FormLabel, Button, Input } from "@chakra-ui/react";

export function Register() {
    return (

        <>
            <FormControl boxShadow='xl' p='8' rounded='md' bg='white'>
                <FormLabel htmlFor='first-name'>Nom:</FormLabel>
                <Input id='first-name' />
                <FormLabel mt={2} htmlFor='first-surname'>Primer cognom:</FormLabel>
                <Input id='first-surname' />
                <FormLabel mt={2} htmlFor='first-surname'>Segon cognom:</FormLabel>
                <Input id='second-surname' />
                <FormLabel mt={2} htmlFor='email'>Data de naixament:</FormLabel>
                <Input id='dob' type='date' />
                <FormLabel mt={2} htmlFor='email'>Correu electrònic:</FormLabel>
                <Input id='email' type='email' />
                <FormLabel mt={2} htmlFor='username'>Usuari:</FormLabel>
                <Input id='username' />
                <FormLabel mt={2} htmlFor='password'>Contrassenya:</FormLabel>
                <Input id='password' type='password' />
                <FormLabel mt={2} htmlFor='password'>Repeteix la contrassenya:</FormLabel>
                <Input id='password' type='password' />
                <Button
                    mt={2}
                    colorScheme='pink'
                    type='submit'
                >
                    Registrar-se
                </Button>
                <Button
                    mt={2}
                    ml={2}
                    colorScheme='purple'
                    type='submit'
                    
                >
                    Tornar enrere
                </Button>
            </FormControl>
        </>
        /*<div className="col-lg-6 form">
            <div id="my-form" className="row form">
                <div className="col-lg-11 offset-lg-1">
                    <div className="shadow-lg p-4 bg-body rounded">
                        <form method="post">
                            <label>
                                Nom<span className="c-span">*</span>:
                            </label>
                            <input
                                name="name"
                                className="form-control"
                                placeholder="Nombre"
                                required
                            />
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="padding-2">
                                        Primer cognom
                                        <span className="c-span">*</span>:
                                    </label>
                                    <input
                                        name="surname1"
                                        className="form-control"
                                        placeholder="Primer cognom"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="padding-2">
                                        Segon cognom:
                                    </label>
                                    <input
                                        name="surname2"
                                        className="form-control"
                                        placeholder="Segon cognom"
                                    />
                                </div>
                            </div>

                            <label className="padding-2">
                                Data de naixament
                                <span className="c-span">*</span>:
                            </label>
                            <input
                                type="date"
                                name="dateofbirth"
                                className="form-control"
                                min="1920-1-01"
                                max="2023-12-31"
                                required
                            />
                            <label className="padding-2">
                                Usuari<span className="c-span">*</span>:
                            </label>
                            <input
                                name="username"
                                className="form-control"
                                placeholder="Usuari"
                                required
                            />
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="padding-2">
                                        Contrassenya
                                        <span className="color: pur;">*</span>:
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Contrassenya"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="padding-2">
                                        Repeteix la contrassenya
                                        <span className="c-span">*</span>:
                                    </label>
                                    <input
                                        type="password"
                                        name="password2"
                                        className="form-control"
                                        placeholder="Contrassenya"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="b-width my-btn btn btn-secondary padding-2"
                            >
                                Registra't
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>*/
    );
}

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
