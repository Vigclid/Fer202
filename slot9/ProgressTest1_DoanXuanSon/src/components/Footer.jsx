import { Container, Row, Col } from 'react-bootstrap';
import { memo } from "react";

const Footer = ({contactMethods , socialMedia }) => {
    const iconStyle = { width: '24px', height: '24px' };
  const socialIconStyle = { width: '24px', height: '24px' };
    return (
        <Container fluid className="" style={{ backgroundColor: "#F08D30" }}>
        <Row>
          <Col md={7} className="ms-5 mt-3">
            <div className="fs-3 fw-bold">Our Address</div>
            <div className="items">
              <div>Khu đô thị FPT Đà Nẵng</div>
              {contactMethods.map((item, index) => (
                <div key={index} className="item d-flex">
                  <img src={item.icon.trim()} style={iconStyle} alt="" />
                  {item.isLink ? (
                    <a href={item.href} className="text-decoration-none ps-2">
                      {item.content}
                    </a>
                  ) : (
                    <div className="ps-2">{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </Col>
          <Col md={4}>
            <div className="items d-flex mt-5">
              {socialMedia.map((social, index) => (
                <div key={index} className="item">
                  <a href={social.href}>
                    <img src={social.icon.trim()} style={socialIconStyle} alt="" />
                  </a>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <div className="mt-5 mb-3 d-flex justify-content-center align-items-center">
            &copy; CopyWrite 2023
          </div>
        </Row>
      </Container>
    )
}

export default memo(Footer)