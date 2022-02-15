import React from "react";
import { v4 as uuidv4 } from 'uuid';

function CategoryFilter({ categories, setCategory }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category => {
        return <button key={uuidv4()} 
                       onClick={()=> setCategory(category)}
               >
               {category}
               </button>
      })}
    </div>
  );
}

export default CategoryFilter;
