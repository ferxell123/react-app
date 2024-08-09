import { PropTypes } from "prop-types";
import { ProductDetail } from "./ProductDetail";

export const ProductGrid = ({
  handlerProductSelected,
  handleRemove,
  products = [],
}) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actualizar</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <ProductDetail
              handlerProductSelected={handlerProductSelected}
              handleRemove={handleRemove}
              key={product.name}
              pro={product}
            />
          );
        })}
      </tbody>
    </table>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handlerProductSelected: PropTypes.func.isRequired,
};
