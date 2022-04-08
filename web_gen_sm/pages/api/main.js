// https://javascript.plainenglish.io/connect-mysql-and-authentication-on-next-js-761d12340e4f

import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import executeQuery from "db";
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

export async function getEmotions() {
	try {
		const result = await executeQuery({
			query: "SELECT imagen FROM emocion",
			values: []
		});
	} catch (error) {
		console.log(error);
	}
}

export async function getEvents() {}

export async function postReaction() {}

export async function getCalendarEvent() {}

export async function createCalendarEvent() {}

export async function createPost(
	premium,
	fechapost,
	idUsuario,
	idEmocion,
	path_img,
	descripcion
) {
	try {
		const result = await executeQuery({
			query: "INSERT INTO post (premium,fechapost,idUsuario,idEmocion,path_img,descripcion) VALUES (?,?,?,?,?,?)",
			values: [
				premium,
				fechapost,
				idUsuario,
				idEmocion,
				path_img,
				descripcion
			]
		});
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}

export async function deletePost(idUsuario, idPost) {
	try {
		const result = await executeQuery({
			query: "DELETE FROM post WHERE idUsuario = ? AND idPost = ?",
			values: [idUsuario, idPost]
		});
		console.log(result);
		return result;
	} catch (error) {
		console.log(error);
	}
}

export async function getMotivationalPhrase(idFrase) {
	try {
		const result = await executeQuery({
			query: "SELECT frase FROM frase WHERE id = ?",
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
			query: "SELECT * FROM posts WHERE post.idPost=? post.idUsuario=?",
			values: [idPost, idUsuario]
		});

		console.log(result);
		//return [0];
	} catch (error) {
		console.log(error);
	}
}

export async function loadFeed(emotion) {
	// preguntar mañana como se tiene que organizar las emociones y que tiene que salir
	// y como se tiene que hacer el display en el feed
	// si solo visualizamos cosas buenas, no se enseñarán cosas malas y si estas bien
	// que tiene que salir??
}
