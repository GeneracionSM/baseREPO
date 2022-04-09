import executeQuery from "../../../lib/db";
import moment from "moment";

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