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