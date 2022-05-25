// https://javascript.plainenglish.io/connect-mysql-and-authentication-on-next-js-761d12340e4f





//Hay que hacer un fichero de endpoint para cada querry
import executeQuery from "../../../lib/db";


export async function createUser(nombre, apellido_uno, apellido_dos, fecha_nacimiento, alias, correo, password) {

    const user = {
        name: nombre,
        ap_uno: apellido_uno,
        ap_dos: apellido_dos,
        fc_nc: fecha_nacimiento,
        al: alias,
        email: correo,
        pass: password,
    };
    try {
        const result = await excuteQuery({
            query: 'INSERT INTO usuario (nombre,apellido_1,apellido_2,mail,password,fecha_nacim,username) VALUES (?,?,?,?,?,?,?)',
            values: [user.name, user.ap_uno, user.ap_dos, user.email, user.pass, user.fc_nc, user.al],
        });
        console.log(result);
    } catch (error) {
        return user;
    }
}

export async function emotionLogin(idUsuario, idEmocion) {
    try {
        const result = await excuteQuery({
            query: 'INSERT INTO registroemocion (idUsuario, idEmocion, data) VALUES (?,?,?)',
            values: [idUsuario, idEmocion, '', moment().format('YYYY-MM-DD HH:mm:ss')],
        });
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function emotionLogout(idUsuario, idEmocion) {
    try {
        const result = await excuteQuery({
            query: 'INSERT INTO registroemocion (idUsuario, idEmocion, data) VALUES (?,?,?)',
            values: [idUsuario, idEmocion, moment().format('YYYY-MM-DD HH:mm:ss')],
        });
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function validateUser(correo, password) {
    const user = {
        email: correo,
        pass: password,
    };
    try {
        const result = await excuteQuery({
            query: 'SELECT idUsuario FROM usuario WHERE mail = ? AND password = ?',
            values: [user.email, user.pass],
        });
        console.log(result);
        return result;
    } catch (error) {
        return user;
    }
}

export async function getEmotionimg(idEmocion) {
    try {
        const result = await excuteQuery({
            query: 'SELECT imagen FROM emocion where idEmocion = ?',
            values: [idEmocion],
        });
        return result;
    } catch (error) {
        console.log(error);
    }
}



export async function getEvents() { }

export async function postReaction() { }

export async function getCalendarEvent() { }

export async function createCalendarEvent() { }

export async function createPost(
    premium,
    fechapost,
    idUsuario,
    idEmocion,
    path_img,
    descripcion
) {
    try {
        const result = await executeQuery(
            "INSERT INTO post (premium,fechapost,idUsuario,idEmocion,path_img,descripcion) VALUES (?,?,?,?,?,?)",
            [
                premium,
                fechapost,
                idUsuario,
                idEmocion,
                path_img,
                descripcion
            ]
        );

        let posts = JSON.parse(JSON.stringify(result));
        return {
            props: { posts } // will be passed to our blog page component as props
        };
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export async function deletePost(idUsuario, idPost) {
    try {
        const result = await executeQuery(
            "DELETE FROM post WHERE idUsuario = ? AND idPost = ?",
            [idUsuario, idPost]
        );
        let posts = JSON.parse(JSON.stringify(result));
        return {
            props: { posts } // will be passed to our blog page component as props
        };
    } catch (error) {
        console.log(error);
    }
}

export async function getMotivationalPhrase(idFrase) {
    try {
        const result = await executeQuery(
            "SELECT frase FROM frase WHERE id = ?",
            [idFrase]
        );
        let posts = JSON.parse(JSON.stringify(result));
        return {
            props: { posts } // will be passed to our blog page component as props
        };
    } catch (error) {
        console.log(error);
    }
}

export async function isAuthor(idUsuario, idPost) {
    try {
        const result = await executeQuery(
            "SELECT * FROM posts WHERE post.idPost=? post.idUsuario=?",
            [idPost, idUsuario]
        );
        let posts = JSON.parse(JSON.stringify(result));
        return {
            props: { posts } // will be passed to our blog page component as props
        };
    } catch (error) {
        console.log(error);
    }
}

export async function getUser() {
    console.log("Hola");
    const result = executeQuery(`
        SELECT * FROM usuario
        `);
    return result;
}

export async function loadFeed(emotion) {
    // preguntar mañana como se tiene que organizar las emociones y que tiene que salir
    // y como se tiene que hacer el display en el feed
    // si solo visualizamos cosas buenas, no se enseñarán cosas malas y si estas bien
    // que tiene que salir??
}
