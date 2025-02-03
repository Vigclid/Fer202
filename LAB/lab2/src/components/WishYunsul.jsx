import Form from 'react-bootstrap/Form';
import {memo} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function WishYunsul() {
  return (
    <div className='container'>
    <Row className="text-center">
        <Col><h3 className='mt-5 text-white'>I wish...</h3></Col>
    </Row>
    <Form>
        <Form.Group className="mb-3" >
           <Row>
           <Col><Form.Control type="Name" placeholder="Name*" /> </Col> 
           <Col><Form.Control type="email" placeholder="Email*" /> </Col> 
           <Col>
           <Form.Select aria-label="Default select example">
                <option value="1">Killing the gods, Killing the Ethiron, I wish to be your eternal enemy...</option>
                <option value="2">This power is not what I want, I wish to another one...</option>
                <option value="3">The challenge ahead is too deadly, I wish to escape...</option>
            </Form.Select>
            </Col> 
           </Row>

        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Control as="textarea" rows={3} placeholder='Please enter additional information...' />
        </Form.Group>
        <Button variant="outline-success">WISH!</Button>
    </Form>
    </div>
  );
}

export default memo(WishYunsul);