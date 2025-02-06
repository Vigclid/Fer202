import {memo} from 'react'
import { Container,Row,Col,Button,InputGroup,Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';


const FormRegister = () => {

    return (
        <Container className="my-5 border" >
            <Row><h3><b>Form đặt vé máy bay</b></h3></Row>

            <Row>
                <Form.Label>Họ tên</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                        <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                    <Form.Control
                        placeholder="Họ Tên"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text id="basic-addon2">vnđ</InputGroup.Text>
                </InputGroup>
                <Form.Text className="text-muted">Phải nhật 5 ký tự, in hoa,...</Form.Text>
            </Row>

            <Row className='my-5'>
                <Form.Label >Địa chỉ</Form.Label>
                <InputGroup className="mb-3">
    
                    <Form.Control
                        placeholder=""
                        aria-label="Adress"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Row>

            <Row className='my-5'>
                <Col>
                    <Form.Label >Đi từ</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="1">Hà Nội</option>
                        <option value="2">Đà Nẵng</option>
                        <option value="3">Hồ Chí Minh</option>
                    </Form.Select>
                </Col>

                <Col>
                    <Form.Label >Đến</Form.Label>
        
                    <Form.Select aria-label="Default select example">
                        <option value="1">Hải Phòng</option>
                        <option value="2">Nha Trang</option>
                        <option value="3">Quảng Bình</option>
                    </Form.Select>

                </Col>
            </Row>

            <Row>
            <Form>
                <p>Chọn chiều đi (khứ hồi)</p>
                {[
                    { id: 'one-way', label: 'Đi' },
                    { id: 'round-trip', label: 'Về' }
                ].map((item) => (
                    <div key={item.id} className="mb-3">
                        <Form.Check 
                            type="checkbox"
                            id={item.id}
                            label={item.label} 
                        />
                    </div>
                ))}
            </Form>
            </Row>

            <Row>
                <Button variant='primary'>Đặt Vé </Button>
            </Row>
        </Container>
    )
}

export default memo(FormRegister)