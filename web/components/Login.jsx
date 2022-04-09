import executeQuery from "../../../lib/db";
import moment from "moment";

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