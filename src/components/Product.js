import React from "react";
import {useNavigate} from "react-router-dom";

const Product = ({ product, deleteProduct }) => {
    const navigate = useNavigate();
    const editProduct = (e, productId) => {
        e.preventDefault();
        navigate(`/editProduct/${productId}`);
    };

    return (
        
        <tr key={product.productId} className="border-b border-gray-200">
  <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-gray-700 font-medium text-lg">{product.productName}</div>
  </td>
  <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-gray-700 text-lg">{product.productDescription}</div>
  </td>
  <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-gray-700 text-lg">{product.productCategory}</div>
  </td>
  <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-gray-700 text-lg">{product.productBrand}</div>
  </td>
  <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-gray-700 text-lg">{product.productPrice}</div>
  </td>
  <td className="px-6 py-4 whitespace-nowrap text-right">
    <button
      onClick={(e, productId) => editProduct(e, product.productId)}
      className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none"
    >
      Edit
    </button>
    <button
      onClick={(e, productId) => deleteProduct(e, product.productId)}
      className="bg-red-700 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded focus:outline-none ml-2"
    >
      Delete
    </button>
  </td>
</tr>


    );
};

export default Product;