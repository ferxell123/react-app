import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { findAll} from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { ProductForm } from "./ProductForm";

export const ProductApp = ({ title }) => {
  //const [product, setProducts] = useState(initProducts); //ejemplo 1
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState({
	id: 0,
    name: "",
    description: "",
    price: "",
  });

const getProducts = async () => {
  const result = await findAll();
  setProducts(result.data._embedded.products);
};

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddProduct = (product) => {
    //ejemplo 2
    console.log(product);

    if (product.id > 0 ) {
      setProducts(
        products.map((prod) => {
          if (prod.id === product.id) {
            return { ...product };
          }
          return prod;
        })
      );
    } else {
      setProducts([...products, { ...product, id: new Date().getTime() }]);
    }
  }

  const handleRemoveProduct = (id) => {
    //ejemplo 3
    const result = products.filter((product) => product.id !== id);
    setProducts(result);
  };

  const handlerProductSelected = (product) => {
    setProductSelected({ ...product });
  };

  return (
    <div className="container my-4">
      <h1>{title}</h1>
      <div className="row">
      <div className="col">
        <ProductForm
          handlerAdd={handleAddProduct}
          productSelected={productSelected}
        />
      </div>
      <div className="col">
        {
          products.length === 0 ? <div className="alert alert-warning">No hay productos</div>:
        <ProductGrid
        products={products}
        handleRemove={handleRemoveProduct}
        handlerProductSelected={handlerProductSelected}
        />
      }
      </div>
    </div>
    </div>
  );
};

ProductApp.propTypes = {
  title: PropTypes.string.isRequired,
};
