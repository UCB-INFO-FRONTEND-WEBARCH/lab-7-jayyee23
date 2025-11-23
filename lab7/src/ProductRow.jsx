import { memo } from 'react';

// TODO 4: COMPLETED - Wrapped component with React.memo
// This component now only re-renders when its props actually change.
// After implementing memo + useCallback in the parent,
// clicking the favorite button should ONLY re-render the changed row,
// not all of them.

const ProductRow = memo(function ProductRow({ product, onToggleFavorite }) {
    console.log("Row render:", product.name);
  
    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>
          <button onClick={() => onToggleFavorite(product.id)}>
            {product.favorite ? "★" : "☆"}
          </button>
        </td>
      </tr>
    );
  });
  
  export default ProductRow;
  