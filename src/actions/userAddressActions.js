import axios from 'axios'
export const addAddress = (address, city, com) => () => {
    try {
        //TODO: add request
        return axios.post('/api/userAddress/add', {
            address,
            city,
            com
        }).then(data => data.data.data)

    } catch(err) {
        console.log(err);
        throw err
    }
}

export const getUserAddress = () => () => {
    try {
        return axios.get('/api/userAddress/')
            .then(data => data.data.data)
    } catch (err) {
        console.log(err)
        throw err;
    }
}

export const deleteUserAddress = (userAddressId) => () => {
    try {
        /*return axios.delete(`/api/userAddress/by-id/${userAddressId}/delete`)
            .then(data => data.data.data)
            // TODO request not working
         */
    } catch (err) {
        console.log(err)
        throw err;
    }
}
