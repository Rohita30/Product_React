import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import ProductService from "../services/ProductService";

const UpdateProduct = () => {
    const {productId} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        productId: productId,
        productName: "",
        productDescription: "",
        productCategory: "",
        productBrand: "",
        productPrice: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ProductService.getProduct(product.productId);
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        console.log(product);
        ProductService.updateProduct(product, productId)
          .then((response) => {
            navigate("/productList");
          })
          .catch((error) => {
            console.log(error);
          });
    };

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
  <div className="px-8 py-8 w-full">
    <div className="font-semibold text-xl text-blue-800 mb-6" style={{ fontFamily: 'Pacifico', fontSize: '1.75rem' }}>
      Update Product
    </div>
    <div className="space-y-4">
      <div>
        <label className="text-gray-600 text-sm font-medium">Product Name</label>
        <input
          type="text"
          name="productName"
          value={product.productName}
          onChange={(e) => handleChange(e)}
          className="h-10 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
        />
      </div>
      <div>
        <label className="text-gray-600 text-sm font-medium">Product Description</label>
        <input
          type="text"
          name="productDescription"
          value={product.productDescription}
          onChange={(e) => handleChange(e)}
          className="h-10 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
        />
      </div>
      <div>
        <label className="text-gray-600 text-sm font-medium">Product Category</label>
        <input
          type="text"
          name="productCategory"
          value={product.productCategory}
          onChange={(e) => handleChange(e)}
          className="h-10 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
        />
      </div>
      <div>
        <label className="text-gray-600 text-sm font-medium">Product Brand</label>
        <input
          type="text"
          name="productBrand"
          value={product.productBrand}
          onChange={(e) => handleChange(e)}
          className="h-10 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
        />
      </div>
      <div>
        <label className="text-gray-600 text-sm font-medium">Product Price</label>
        <input
          type="text"
          name="productPrice"
          value={product.productPrice}
          onChange={(e) => handleChange(e)}
          className="h-10 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
        />
      </div>
      <div className="flex justify-end pt-4">
        <button
          onClick={updateProduct}
          className="rounded text-white font-semibold bg-blue-800 hover:bg-blue-700 py-2 px-6"
        >
          Update
        </button>
        <button
          onClick={() => navigate("/productList")}
          className="rounded text-white font-semibold bg-red-700 hover:bg-red-500 py-2 px-6 ml-4"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>


    );
};

export default UpdateProduct;