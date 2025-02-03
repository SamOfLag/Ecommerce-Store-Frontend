import { Container, Row, Col, Card } from 'react-bootstrap';

const RelatedProducts = () => {
  const categories = [
    {
      title: 'RELATED PRODUCT',
      products: [
        { name: 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...', price: '$1,500', imgSrc: '/assets/images/apple1.png' },
        { name: 'Simple Mobile 4G LTE Prepaid Smartphone', price: '$1,500', imgSrc: '/assets/images/apple1.png' },
        { name: '4K UHD LED Smart TV with Chromecast Built-in', price: '$1,500', imgSrc: '/assets/images/apple1.png' },
      ],
    },
    {
      title: 'PRODUCT ACCESSORIES',
      products: [
        { name: 'Samsung Electronics Samsung Galaxy S21 5G', price: '$1,500', imgSrc: '/assets/images/apple1.png' },
        { name: 'Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone', price: '$1,500', imgSrc: '/assets/images/apple1.png' },
        { name: 'Sony DSCHX8 High Zoom Point & Shoot Camera', price: '$1,500', imgSrc: '/assets/images/apple1.png' },
      ],
    },
    {
      title: 'APPLE PRODUCT',
      products: [
        { name: 'TOZO T6 True Wireless Earbuds Bluetooth Headphones...', price: '$1,500', imgSrc: '/assets/images/apple1.png' },
        { name: 'JBL FLIP 4 - Waterproof Portable Bluetooth Speaker', price: '$1,500', imgSrc: '/assets/images/apple1.png' },
        { name: 'Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart...', price: '$1,500', imgSrc: '/assets/images/apple1.png' },
      ],
    },
    {
      title: 'FEATURED PRODUCTS',
      products: [
        { name: 'Portable Washing Machine, 11lbs Capacity Model 18NMF...', price: '$1,500', imgSrc: '/assets/images/apple1.png' },
        { name: 'Sony DSCHX8 High Zoom Point & Shoot Camera', price: '$1,500', imgSrc: '/assets/images/apple1.png' },
        { name: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor', price: '$1,500', imgSrc: '/assets/images/apple1.png' },
      ],
    },
  ];

  return (
    <Container className="py-5">
      <Row>
        {categories.map((category, idx) => (
          <Col key={idx} lg={3} md={6} sm={12} className="mb-4">
            <h5 className="fw-bold mb-3">{category.title}</h5>
            {category.products.map((product, idx) => (
              <Card key={idx} className="border-0 mb-3">
                <Row className="g-0">
                  <Col xs={3}>
                    <Card.Img src={product.imgSrc} alt={product.name} className="img-fluid rounded" />
                  </Col>
                  <Col xs={9}>
                    <Card.Body className="p-0 ps-3">
                      <Card.Title className="fs-6 mb-1 text-truncate">
                        {product.name}
                      </Card.Title>
                      <Card.Text className="fw-bold text-primary mb-0">
                        {product.price}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RelatedProducts;
