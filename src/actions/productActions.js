import axios from "axios";

export const getProduct = (productId) => async  () => {
    try {
        return await axios.get(`/api/products/by-id/${productId}`)
            .then((response) => response.data.data)
    } catch (err) {
        console.log(err);
        throw err
    }
}
export const getSellerProducts = () => async () => {
    try {
        return await axios.get(`/api/products/get-products-detailed`)
            .then((response) => response.data.data);
    } catch(err) {
        throw err;
    }
}

export const updateProduct = (productId, name, description, price) => async () => {
    try {
        return await axios.put(`/api/products/by-id/${productId}/update`,
            {
                name,
                description,
                price
            })
            .then((response) => response.data.data);
    } catch(err) {
        throw err;
    }
}

export const addProduct = (name, description, price) => async () => {
    try {
        return await axios.post(`/api/products/add`,
            {
                name,
                description,
                price
            }).then((response) => response.data.data);
    } catch(err) {
        throw(err);
    }
}