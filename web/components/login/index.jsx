import React from "react";
import executeQuery from "../../../lib/db";
import moment from "moment";
import { FormControl, Button, Input } from "@chakra-ui/react";
import Link from "next/link";

export function Login({ onRegisterClick }) {
    return (
        <>
            <FormControl boxShadow='xl' p='8' rounded='md' bg='white'>
                <Input pt={1} id='username' placeholder='Usuari' />
                <Input mt={1} id='password' type='password' placeholder='Contrassenya' />
                {/* <Button
                    mt={4}
                    colorScheme='pink'
                    type='submit'
                >
                    Iniciar sessió
                </Button> */}
                <Link href="/muro">
                    Iniciar Sessió
                </Link>
                <Button
                    ml={2}
                    mt={4}
                    colorScheme='purple'
                    type='submit'
                    onClick={onRegisterClick}
                >
                    Registra't
                </Button>
            </FormControl>
        </>
    );
}

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