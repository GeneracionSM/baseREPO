import mysql from "serverless-mysql";


const db = mysql({
    config: {
        //Configuration in .env.local
        host: 'localhost',
        //port: process.env.MYSQL_PORT,
        database: 'hackathon',
        user: 'test',
        password: 'hola',
    },
});

export default async function executeQuery(query_string, values = []) {
    try {
        const results = await db.query(query_string, values)
        await db.end()
        return results
    } catch (error) {
        throw Error(error.message)
    }
}
