import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-8 text-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-4 font-serif">About</h1>
      <div className="text-lg text-gray-700 mb-4">
        <p>
          The price comparison website will help users find the best deals on
          products from different online retailers. The system will provide an
          intuitive user interface, with advanced search and filtering
          capabilities, along with real-time price comparisons. The website will
          generate revenue through affiliate marketing, ensuring a sustainable
          business model.
        </p>
        <p>
          This is the about page for the microservice Product of my Price Comparison
          Website. In this microservice, we can add new products, after entering all 
          the details of the new product, we can edit the details, and we can also delete a 
          product's details. On the home page, we can view all the details of the 
          products that are currently saved in the database.
        </p>
      </div>
    </div>
  );
};

export default About;






