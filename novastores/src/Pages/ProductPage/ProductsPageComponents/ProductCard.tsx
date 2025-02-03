import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCardProps } from '../../../Utils/props.utils';

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  price,
  rating,
  reviews,
  badge,
}) => (
  <Link to={`/product/${id}`} className="text-decoration-none text-dark">
    <div className="product-card border rounded p-2 mb-4 shadow-sm bg-white">
      <div className="position-relative">
        <img
          src={image}
          alt={name}
          className="img-fluid rounded"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        {badge && (
          <span
            className={`badge position-absolute top-0 start-0 m-2 ${
              badge === 'HOT' ? 'bg-danger' : 'bg-success'
            }`}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="mt-2">
        <h6 className="text-truncate" title={name}>
          {name}
        </h6>
        <p className="mb-1">
          <span className="text-warning">{'★'.repeat(rating)}</span>
          <span className="text-muted">{'☆'.repeat(5 - rating)}</span>
          <span className="ms-2 text-muted">({reviews})</span>
        </p>
        <p className="fw-bold">${price}</p>
      </div>
    </div>
  </Link>
);

export default ProductCard;
