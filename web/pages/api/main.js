// https://javascript.plainenglish.io/connect-mysql-and-authentication-on-next-js-761d12340e4f






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
