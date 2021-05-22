import axios from 'axios'
export const addAddress = (address, city, postalCode) => (dispatch) => {
    try {
        //TODO: add request
        return axios.post('/api/profile/address/add', {
            address,
            city,
            postalCode
        }).then(data => data.data)

    } catch(err) {
        console.log(err);
        throw err
    }
}
