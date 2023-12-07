import { Api } from "../lib/axios"

export const getData = async (endpoint) => {
    try {
        const data = await Api(endpoint)
        return data.data
    }
    catch (err) {
        console.log(err);
    }
}