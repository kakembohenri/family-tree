import axios from "axios"

const uri = 'api/tree'

export const getTree = async () => {
    try {
        const users = await axios.get(uri)
        console.log(users)
        return users
    } catch (error) {
        console.log(error)
    }
    
}
