import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardGroup,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
import { Layout } from '../../components';
import { fetchProducts } from '../../api/fetchProducts';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await fetchProducts(12);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log('Error = ', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Container fluid>
        <CardGroup style={{ gridGap: '20px', margin: '20px 0px' }}>
          {loading ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h4 style={{ textAlign: 'center', color: '#fff' }}>
                Carregando...
              </h4>
            </div>
          ) : (
            products.map((product) => {
              return (
                <Card key={product._id}>
                  <CardImg
                    top
                    width="20%"
                    src={product?.images[0]?.url}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{product.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      R$ {product.price}
                    </CardSubtitle>

                    <Button
                      onClick={() => {
                        alert('Produto adicionado ao carrinho!');
                      }}
                    >
                      Comprar
                    </Button>
                  </CardBody>
                </Card>
              );
            })
          )}
          {error && <span>Error</span>}
        </CardGroup>
      </Container>
    </Layout>
  );
};

export default Home;
