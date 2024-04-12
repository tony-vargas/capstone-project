import React from 'react';

function Filter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <>
    <div className="Filter">
      <h6>Filter by Category:</h6>
      <select value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>


        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    
    </div>
    <br/>
    </>
  );
}

export default Filter;