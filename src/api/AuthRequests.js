import axios from "axios"

export const loginbyUsernamePassword = async (username, password) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/loginbyusernamepassword`, {
        username, password
    }, {
        headers: {

        }
    }
    )
}
export const registerbyusernamePassword = async (name, username, password, email) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/register-user`, {
        name, username, password, email
    },
        // {
        //     headers: {

        //     }
        // }
    )
}