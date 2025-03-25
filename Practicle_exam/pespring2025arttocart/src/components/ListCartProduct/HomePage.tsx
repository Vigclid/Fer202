
import { Col, Container, Row } from 'react-bootstrap';
import { ProductLists } from './ProductLists';
import { useState } from 'react';
import { Cart } from './Cart';


interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
}

interface Product {
    id: string;
    title: string;
    category: string;
    price: number;
    reviews: Review[];
    quantity: number;
    name : string;
}
export const HomePage = () => {
    
    const [cart, setCart] = useState<Product[]>([]);

  
    const isProductInCart = (product:Product) => {
      return cart.find((item) => item.id === product.id);
    };
    
    const addToCart = (product:Product) => {
      const existingProduct = isProductInCart(product);
      if (existingProduct) {
        const updatedCart = cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    };
    
    
    const removeFromCart = (product:Product) => {
      const existingProduct = isProductInCart(product);
      if (!existingProduct) return;
      if (existingProduct.quantity > 1) {
        const updatedCart = cart.map((item) => {
          if (item.id === product.id) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
          }
          return item;
        });
        setCart(updatedCart);
      } else {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
      }
    };


    
    return (
        <>
              <h1 className='d-flex justify-content-center'>Shopping System</h1>
              <Container fluid>
                <Row>
                  <Col xs={12} md={8} lg={8}>  
                    <ProductLists addToCart={addToCart} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>  
                    <Cart cart={cart} removeFromCart={removeFromCart} setCart={setCart}/>
                  </Col>
                </Row>
              </Container>
        
        </>
    )
}