import axios from "axios";

const initProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "Descripcion para producto 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Descripcion para producto 2",
    price: 200,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Descripcion para producto 3",
    price: 2343,
  },
  {
    id: 4,
    name: "Product 4",
    description: "Descripcion para producto 4",
    price: 2343,
  },
];

export const listProduct = () => {
  return initProducts;
}
const BASE_URL = 'http://localhost:8080/products';
export const findAll = async () => {

  try {
    const response = await axios.get(BASE_URL);
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
  return null;

}
export const create = async ({ name, description, price }) => {
  try {
    const response = await axios.post(BASE_URL, { name, description, price });
    return response
  } catch (error) {
    console.error('Error creating product:', error);
  }
  return undefined;
}
export const update = async ({ id, name, description, price }) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, { name, description, price });
    return response
  } catch (error) {
    console.error('Error updating product:', error);
  }
  return undefined;
}
export const remove = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response
  } catch (error) {
    console.error('Error deleting product:', error);
  }
  return undefined;
}