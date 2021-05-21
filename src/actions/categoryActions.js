import axios from "axios"

export const getProductByCategory = (categoryId, params = {}) => async  () => {
    try {
        return await axios.get(`/api/products/by-category/${categoryId}`, {params: params})
            .then((response) => response.data.data)
    } catch (err) {
        console.log(err);
        throw err
    }
}

export const getProductByCategoryName = (categoryName, params = {}) => async  () => {
    try {
        return await axios.get(`/api/products/by-category-name/${categoryName}`, {params: params})
            .then((response) => response.data.data)
    } catch (err) {
        console.log(err);
        throw err
    }
}
