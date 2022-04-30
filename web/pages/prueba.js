import sql_query from "../../lib/db";
import getMotivationalPhrase from "./api/querries";
import getUser from "./api/querries";
import createUser from "./api/querries";
import executeQuery from "../../lib/db";

export default function hackathon(props) {
    const { posts } = props;
    console.log(posts);
    if (!posts) return <p>Something went wrong....</p>;
    return (
        <div>
            <h1>Welcome to the blog page.....</h1>
            {
                //Aqui va el front end :D
                // render posts here
                posts.map((item) => (
                    <>
                        <h2>{item.nombre}</h2>
                        <p>{item.imagen}</p>
                        <br />
                    </>
                ))
            }
        </div>
    );
}

export async function getServerSideProps(context) {
    // fecth endpoint
    try {
        //switch ()
        /*const result = await executeQuery(`
        SELECT * FROM usuario
        `);*/
        const result = await getUser();
        let posts = JSON.parse(JSON.stringify(result));
        return {
            props: { posts } // will be passed to our blog page component as props
        };
    } catch (e) {
        console.log(e);
        return { props: { posts: false } };
    }
}
