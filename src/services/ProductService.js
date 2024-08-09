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

export const listProduct=()=>{
    return initProducts;
}
const BASE_URL='http://localhost:8080/products';
export const  findAll= async ()=>{

try {
    const response = await axios.get(BASE_URL);
    return response;
} catch (error) {
    console.error('Error fetching products:', error);
}
return null;
 
}