import executeQuery from "../../../lib/db";
import moment from "moment";

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

