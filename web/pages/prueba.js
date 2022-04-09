import executeQuery from "../../lib/db";
import getEmotions from "./api/main";

export default function hackathon(props) {
    const { posts } = props;
    console.log("D "+posts);
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
    console.log("holw");
    try {
         const result = await executeQuery({
            query: "SELECT * FROM `emocion`",
            values: []
        });
        console.log("B"+result);
        let posts = JSON.parse(JSON.stringify(result));
        return {
            props: { posts } // will be passed to our blog page component as props
        };
    } catch (e) {
        return { props: { posts: false } }
    }
}