import React from 'react';
import ProductDetail from './ProductDetailsPageComponents/ProductDetail';
import ProductInformation from './ProductDetailsPageComponents/ProductInformation';
import RelatedProducts from './ProductDetailsPageComponents/RelatedProducts';


const ProductDetailsPage: React.FC = () => {
  return (
    <>
      {/* Product Details Section */}
      <section className="mb-4">
        <ProductDetail />
      </section>

      {/* Product Information Section */}
      <section className="mb-4">
        <ProductInformation />
      </section>

      {/* Related Products Section */}
      <section>
        <RelatedProducts />
      </section>
      </>
  );
};

export default ProductDetailsPage