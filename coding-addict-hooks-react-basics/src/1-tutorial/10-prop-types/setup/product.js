import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = (props) => {
  const { image, name, price } = props;
  const url = image && image.url;

  return (
    <article className="product">
      <img src={url || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  // image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  name: 'default name',
  price: 3.99,
};
export default Product;
