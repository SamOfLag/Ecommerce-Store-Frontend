import React from 'react';
import { Card, Row, Col, Form } from 'react-bootstrap';
import { useProductsContext } from '../../../Contexts/ProductsContext';
import CustomButton from '../../../Components/Partials/Button/Button';

const FilterComponent: React.FC = () => {
  const { state, dispatch } = useProductsContext(); // ✅ Get global state & dispatch

  // Handle Category Change
  const handleCategoryChange = (category: string) => {
    dispatch({ type: 'SET_FILTERS', payload: { ...state.filters, category } });
  };

  // Handle Price Range Change
  const handlePriceRangeChange = (min: number, max: number) => {
    dispatch({
      type: 'SET_FILTERS',
      payload: { ...state.filters, priceRange: [min, max] },
    });
  };

  // Handle Brand Selection
  const handleBrandChange = (brand: string) => {
    const updatedBrands = state.filters.brands?.includes(brand)
      ? state.filters.brands.filter((b: string) => b !== brand)
      : [...(state.filters.brands || []), brand];

    dispatch({
      type: 'SET_FILTERS',
      payload: { ...state.filters, brands: updatedBrands },
    });
  };

  return (
    <Card className="p-3 shadow-sm" style={{ width: '300px' }}>
      {/* CATEGORY SECTION */}
      <div className="mb-4">
        <h6 className="fw-bold">CATEGORY</h6>
        <Form>
          {['Electronics', 'Laptops', 'Smartphones', 'Accessories'].map(
            (category, index) => (
              <Form.Check
                key={index}
                type="radio"
                id={`category-${index}`}
                label={category}
                name="category"
                className="mb-2"
                checked={state.filters.category === category}
                onChange={() => handleCategoryChange(category)}
              />
            )
          )}
        </Form>
      </div>

      {/* PRICE RANGE SECTION */}
      <div className="mb-4">
        <h6 className="fw-bold">PRICE RANGE</h6>
        <Row>
          <Col>
            <Form.Control
              type="number"
              placeholder="Min"
              value={state.filters.priceRange?.[0] || ''}
              onChange={e =>
                handlePriceRangeChange(
                  Number(e.target.value),
                  state.filters.priceRange?.[1] || 0
                )
              }
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Max"
              value={state.filters.priceRange?.[1] || ''}
              onChange={e =>
                handlePriceRangeChange(
                  state.filters.priceRange?.[0] || 0,
                  Number(e.target.value)
                )
              }
            />
          </Col>
        </Row>
      </div>

      {/* BRANDS SECTION */}
      <div className="mb-4">
        <h6 className="fw-bold">BRANDS</h6>
        <Form>
          {['Apple', 'Samsung', 'Dell', 'Sony'].map((brand, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              id={`brand-${index}`}
              label={brand}
              checked={state.filters.brands?.includes(brand) || false}
              onChange={() => handleBrandChange(brand)}
              className="mb-2"
            />
          ))}
        </Form>
      </div>

      <CustomButton variant="primary" className="w-100 mt-3">
        Apply Filters
      </CustomButton>
    </Card>
  );
};

export default FilterComponent;

// import React from 'react';
// import { Card, Row, Col, Form, Button, Image } from 'react-bootstrap';
// import CustomButton from '../../../Components/Partials/Button/Button';

// const FilterComponent: React.FC = () => {
//   return (
//     <Card className="p-3 shadow-sm" style={{ width: '300px' }}>
//       {/* CATEGORY SECTION */}
//       <div className="mb-4">
//         <h6 className="fw-bold">CATEGORY</h6>
//         <Form>
//           {[
//             'Electronics Devices',
//             'Computer & Laptop',
//             'Computer Accessories',
//             'SmartPhone',
//             'Headphone',
//             'Mobile Accessories',
//             'Gaming Console',
//             'Camera & Photo',
//             'TV & Home Appliances',
//             'Watches & Accessories',
//             'GPS & Navigation',
//             'Wearable Technology',
//           ].map((category, index) => (
//             <Form.Check
//               key={index}
//               type="radio"
//               id={`category-${index}`}
//               label={category}
//               name="category"
//               className="mb-2"
//               defaultChecked={index === 0}
//             />
//           ))}
//         </Form>
//       </div>

//       {/* PRICE RANGE SECTION */}
//       <div className="mb-4">
//         <h6 className="fw-bold">PRICE RANGE</h6>
//         <div className="d-flex align-items-center mb-2">
//           <Form.Control
//             type="range"
//             className="flex-grow-1 me-2"
//             min="0"
//             max="1000"
//             step="50"
//           />
//         </div>
//         <Row>
//           <Col>
//             <Form.Control type="number" placeholder="Min price" />
//           </Col>
//           <Col>
//             <Form.Control type="number" placeholder="Max price" />
//           </Col>
//         </Row>
//         <Form>
//           {[
//             'All Price',
//             'Under $20',
//             '$25 to $100',
//             '$100 to $300',
//             '$300 to $500',
//             '$500 to $1,000',
//             '$1,000 to $10,000',
//           ].map((range, index) => (
//             <Form.Check
//               key={index}
//               type="radio"
//               id={`price-${index}`}
//               label={range}
//               name="price"
//               className="mb-2"
//               defaultChecked={index === 4} // Default checked "$300 to $500"
//             />
//           ))}
//         </Form>
//       </div>

//       {/* POPULAR BRANDS SECTION */}
//       <div className="mb-4">
//         <h6 className="fw-bold">POPULAR BRANDS</h6>
//         <Form>
//           {[
//             'Apple',
//             'Microsoft',
//             'Dell',
//             'Symphony',
//             'LG',
//             'Google',
//             'Samsung',
//             'HP',
//             'Xiaomi',
//             'Panasonic',
//             'Intel',
//             'One Plus',
//           ].map((brand, index) => (
//             <Form.Check
//               key={index}
//               type="checkbox"
//               id={`brand-${index}`}
//               label={brand}
//               className="mb-2"
//               defaultChecked={
//                 brand === 'Apple' || brand === 'Google' || brand === 'Dell'
//               }
//             />
//           ))}
//         </Form>
//       </div>

//       {/* POPULAR TAG SECTION */}
//       <div className="mb-4">
//         <h6 className="fw-bold">POPULAR TAG</h6>
//         <div className="d-flex flex-wrap">
//           {[
//             'Game',
//             'iPhone',
//             'TV',
//             'Asus Laptops',
//             'Macbook',
//             'SSD',
//             'Graphics Card',
//             'Power Bank',
//             'Smart TV',
//             'Speaker',
//             'Tablet',
//             'Microwave',
//             'Samsung',
//           ].map((tag, index) => (
//             <Button
//               key={index}
//               variant="outline-secondary"
//               size="sm"
//               className="me-2 mb-2"
//             >
//               {tag}
//             </Button>
//           ))}
//         </div>
//       </div>

//       {/* AD BANNER */}
//       <div className="mb-4">
//         <Card className="text-center shadow-sm border-1">
//           <Card.Body>
//             <Image src="/assets/images/image7.png" fluid className="mb-3" />
//             <h5 className="fw-bold mb-1">Apple Watch Series 7</h5>
//             <p className="text-muted mb-3">
//               Heavy on Features. Light on Price.
//             </p>
//             <h6 className="fw-bold text-warning">$299 USD</h6>
//             <div className="d-grid gap-2">
//               <CustomButton
//                 variant="warning"
//                 className="text-white"
//                 size="lg"
//                 type="submit"
//                 onClick={() => console.log('Add to Cart Clicked')}
//               >
//                 {' '}
//                 ADD TO CART
//               </CustomButton>
//               <CustomButton
//                 variant="outline-primary"
//                 type="submit"
//                 size="lg"
//                 onClick={() => console.log('View Details Clicked')}
//               >
//                 {' '}
//                 VIEW DETAILS →
//               </CustomButton>
//             </div>
//           </Card.Body>
//         </Card>
//       </div>
//     </Card>
//   );
// };

// export default FilterComponent;
