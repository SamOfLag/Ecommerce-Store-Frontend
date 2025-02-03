import React, { useEffect, useRef, useCallback } from 'react';
import {
  Row,
  Col,
  InputGroup,
  Dropdown,
  Button,
  FormControl,
  Spinner,
} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useProductsContext } from '../../../Contexts/ProductsContext';
import ProductCard from './ProductCard';

const ProductsComponent: React.FC = () => {
  const { state, dispatch, handleSearchInputChange } = useProductsContext();
  const observer = useRef<IntersectionObserver | null>(null);

  // Infinite Scroll Trigger
  const lastProductRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (state.loading || !state.hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          dispatch({ type: 'NEXT_PAGE' });
        }
      });
      if (node) observer.current.observe(node);
    },
    [state.loading, state.hasMore, dispatch]
  );

  // Effect to fetch products on filter change
  useEffect(() => {
    dispatch({ type: 'FETCH_START' });
  }, [state.searchQuery, state.filters, state.page, dispatch]);

  return (
    <div>
      {/* Search Bar, Sort, and Results Found */}
      <Row className="mb-4 align-items-center">
        <Col md={6}>
          <InputGroup>
            <FormControl
              placeholder="Search for anything..."
              value={state.searchQuery}
              onChange={handleSearchInputChange}
            />
            <Button variant="light">
              <FaSearch />
            </Button>
          </InputGroup>
        </Col>
        <Col md={3} className="text-end">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" className="shadow-sm">
              Sort by: Most Popular
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() =>
                  dispatch({ type: 'SET_SORT', payload: 'popularity' })
                }
              >
                Most Popular
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  dispatch({ type: 'SET_SORT', payload: 'priceAsc' })
                }
              >
                Price: Low to High
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  dispatch({ type: 'SET_SORT', payload: 'priceDesc' })
                }
              >
                Price: High to Low
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={3} className="text-end">
          <span className="fw-semibold">
            {state.products.length} Results Found
          </span>
        </Col>
      </Row>

      {/* Product Cards */}
      <Row>
        {Array.isArray(state.products) && state.products.length > 0 ? (
          state.products.map((product, index) => {
            const isLastProduct = index === state.products.length - 1;
            return (
              <Col
                md={3}
                sm={6}
                xs={12}
                key={product.id}
                className="mb-4"
                ref={isLastProduct ? lastProductRef : null}
              >
                <ProductCard
                  id={product.id}
                  image={product.images?.[0] || '/placeholder.jpg'} // ✅ Use first image or placeholder
                  name={product.name}
                  price={product.price}
                  rating={product.rating || 0} // ✅ Default rating to 0
                  reviews={product.reviews || 0} // ✅ Default reviews to 0
                  badge={product.badge}
                />
              </Col>
            );
          })
        ) : (
          <div className="text-center text-muted">No products available.</div>
        )}
      </Row>

      {/* Loading Skeleton */}
      {state.loading && (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {/* No Products Found */}
      {!state.loading && state.products.length === 0 && (
        <div className="text-center text-muted">
          No products match your search or filters.
        </div>
      )}
    </div>
  );
};

export default ProductsComponent;
