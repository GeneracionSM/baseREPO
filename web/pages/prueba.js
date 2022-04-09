import sql_query from "../../lib/db";

export default function hackathon(props) {
    const { posts } = props;
    console.log(posts);
    if (!posts) return <p>Something went wrong....</p>
    return <div>
        <h1>Welcome to the blog page.....</h1>
        {
            // render posts here
            posts.map(
                (item) => <>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <br />
                </>
            )

        }
    </div>
}

export async function getStaticProps(context) {
    // fecth endpoint
    try {
        const result = await sql_query(
        `
          SELECT * FROM emocion
        `
        );
        let posts = JSON.parse(JSON.stringify(result));
        console.log(posts);
        return {
            props: { posts } // will be passed to our blog page component as props
        };
    } catch (e) {
        console.log(e)
        return { props: { posts: false } }
    }
}