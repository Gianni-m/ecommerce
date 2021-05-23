import axios from "axios";

export const createCommands = (products, addressId) => async () => {
    try {
        return await axios.post(`/api/commands/create`, {
            products: JSON.stringify(products),
            addressId: addressId
        })
            .then((response) => response.data);
    } catch (err) {
        console.log(err);
        throw err
    }
}

export const getCommands = () => async () => {
    try {
        return await axios.get(`/api/commands/`, {
        })
            .then((response) => response.data.data);
    } catch (err) {
        console.log(err);
        throw err
    }
}

export const getUserCommands = () => async () => {
    try {
        return await axios.get(`/api/commands/from-user`)
            .then((response) => response.data.data);
    } catch (err) {
        console.log(err);
        throw err
    }
}
