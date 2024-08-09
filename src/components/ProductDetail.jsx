import { PropTypes } from 'prop-types';
export const ProductDetail = ({
    handlerProductSelected, handleRemove, pro = {} }) => {
  return (
    <tr>
      <td>{pro.id}</td>
      <td>{pro.name}</td>
      <td>{pro.description}</td>
      <td>{pro.price}</td>
      <td><button className='btn btn-secondary btn-sm' onClick={() => handlerProductSelected(pro)}>Update</button></td>
      <td><button className='btn btn-danger btn-sm' onClick={() => handleRemove(pro.id)}>Remove</button></td>
    </tr>
  );
}

ProductDetail.propTypes = {
  pro: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handlerProductSelected: PropTypes.func.isRequired
}
