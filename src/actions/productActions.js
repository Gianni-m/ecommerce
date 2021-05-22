import axios from "axios";

export const getProductById = (productId, params = {}) => async  () => {
    try {
        return await axios.get(`/api/products/by-id/${productId}`, {params: params})
            .then((response) => response.data.data)
    } catch (err) {
        console.log(err);
        throw err
    }
}

export const getProducts = (params = {}) => async  () => {
    try {
        return await axios.get(`/api/products/`, {params: params})
            .then((response) => response.data.data)
    } catch (err) {
        console.log(err);
        throw err
    }
}
export const getSellerProducts = (sellerId, params) => async () => {
    try {
        return await axios.get(`/api/products//from-seller/${sellerId}`, {params})
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

export const addProductSize = (productId, sizeName) => async () => {
    try {
        return await axios.post(`/api/products/by-id/${productId}/add-size`,
            {
                sizeName,
            }).then((response) => response.data.data);
    } catch(err) {
        throw(err);
    }
}

