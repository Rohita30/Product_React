import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:1202/product";

class ProductService {
    saveProduct(product) {
        return axios.post(`${PRODUCT_API_BASE_URL}/addProduct`, product);
    }

    getAllProducts() {
        return axios.get(`${PRODUCT_API_BASE_URL}/getProduct`);
    }

    deleteProduct(productId) {
        return axios.delete(`${PRODUCT_API_BASE_URL}/deleteProduct/${productId}`);
    }

    getProduct(productId) {
        return axios.get(`${PRODUCT_API_BASE_URL}/getProduct/${productId}`);
    }

    updateProduct(product, productId) {
        return axios.put(`${PRODUCT_API_BASE_URL}/updateProduct/${productId}`, product);
    }
}

export default new ProductService();