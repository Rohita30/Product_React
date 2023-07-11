import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ProductService from "../services/ProductService";
import Product from "./Product";

const ProductList = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await ProductService.getAllProducts();
                setProduct(response.data);

            } catch (error) {
                setProduct([]);
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteProduct = (e, productId) => {
        e.preventDefault();
        ProductService.deleteProduct(productId).then((res) => {
            if (product) {
                setProduct((prevElement) => {
                    return prevElement.filter((product) => product.productId !== productId);
                });
            }
        });
    };

    return (
        
      <div className="container mx-auto my-8">
      <div className="flex justify-start mb-4">
        <button 
          onClick={() => navigate("/addProduct")}
          className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-2 rounded font-semibold"
        >
          Add Product
        </button>
      </div>
      <div className="flex flex-col shadow border">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-blue-800 uppercase">
                Product Name
              </th>
              <th className="px-4 py-2 text-left font-medium text-blue-800 uppercase">
                Product Description
              </th>
              <th className="px-4 py-2 text-left font-medium text-blue-800 uppercase">
                Product Category
              </th>
              <th className="px-4 py-2 text-left font-medium text-blue-800 uppercase">
                Product Brand
              </th>
              <th className="px-4 py-2 text-left font-medium text-blue-800 uppercase">
                Product Price
              </th>
              <th className="px-4 py-2 text-left font-medium text-blue-800 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {product.map((product) => (
                <Product
                  product={product}
                  deleteProduct={deleteProduct}
                  key={product.productId}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
    


    );
};

export default ProductList;