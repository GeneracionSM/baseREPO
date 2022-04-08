// https://javascript.plainenglish.io/connect-mysql-and-authentication-on-next-js-761d12340e4f

import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import excuteQuery from 'db.js';
import moment from 'moment';

export async function createUser(nombre, apellido_uno, apellido_dos, fecha_nacimiento,
    alias, correo, password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
        .toString('hex');
    const user = {
        id: uuidv4(),
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        email,
        hash,
        salt,
    };
    try {
        const result = await excuteQuery({
            query: 'INSERT INTO usuario (nombre,apellido_1,apellido_2,mail,password,fecha_nacim,username) VALUES (?,?,?,?,?,?,?)',
            values: [user.id, user.createdAt.toString(), user.email, user.hash, user.salt],
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }

    return user;
}

export async function autenticateUser() {

}

export async function emotionLogin() {

}

export async function emotionLogout() {

}

export async function getEmotions() {
    try {

        const result = await excuteQuery({
            query: 'SELECT imagen FROM emocion',
            values: [],
        });

    } catch (error) {
        console.log(error);
    }

}


export async function getEvents() {

}

export async function postReaction() {

}

export async function getCalendarEvent() {

}

export async function createCalendarEvent() {

}

export async function createPost(premium, fechapost, idUsuario, idEmocion, path_img, descripcion) {

    try {
        const result = await excuteQuery({
            query: 'INSERT INTO post (premium,fechapost,idUsuario,idEmocion,path_img,descripcion) VALUES (?,?,?,?,?,?)',
            values: [premium, fechapost, idUsuario, idEmocion, path_img, descripcion],
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }

}

export async function deletePost() {

}

export async function getMotivationalPhrase(idFrase) {

    try {

        const result = await excuteQuery({
            query: 'SELECT frase FROM frase WHERE id = ?',
            values: [idFrase]
        });
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }

}

export async function isAuthor(idUsuario, idPost) {

    try {
        const result = await executeQuery({
            query: `SELECT * FROM posts WHERE post.idPost=? post.idUsuario=?`,
            values: [idPost, idUsuario]
        })

        console.log(result);
        //return [0];
    } catch (error) {
        console.log(error);
    }

}