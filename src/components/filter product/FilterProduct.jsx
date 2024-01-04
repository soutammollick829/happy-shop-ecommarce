import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';

const FilterProduct = () => {
  // Sample list of products
  const [product] = useProducts();

  // State to manage the price range filter
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Function to filter products based on price range
  const filterProducts = () => {
    const filteredProducts = product.filter((singleProduct) => {
      const productPrice = singleProduct?.price;
      const isWithinRange =
        (!minPrice || productPrice >= parseInt(minPrice, 10)) &&
        (!maxPrice || productPrice <= parseInt(maxPrice, 1500));

      return isWithinRange;
    });

    // Display or use the filteredProducts array
    console.log(filteredProducts);
  };

  return (
    <div className='mx-5 mt-5'>
      <label>
        Min Price:
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </label>
      <button className='btn btn-outline btn-sm' onClick={filterProducts}>Filter</button>

      {/* Display the filtered products */}
      {/* You can map through the filteredProducts array and render them */}
    </div>
  );
};

export default FilterProduct;
