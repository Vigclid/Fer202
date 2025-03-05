
import React, { useState, useEffect } from "react";
import { Form, Button , Col , Row} from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// Hàm xác thực đầu vào (ví dụ: kiểm tra độ dài tối thiểu)
const validateEmail = (value) => {
  return value.length >= 3;
  };
  

const validateCountry = (value) => {
    return value!=null;
}
function UpdateInfo() {
  const [valueEmail, setValueEmail] = useState(""); // State lưu trữ giá trị đầu vào
  const [valueCountry, SetValueCountry] = useState(""); // State lưu trữ giá trị đầu vào
  const [selectedOption, setSelectedOption] = useState('');

  const [isOption, setIsOption] = useState(true);


  const [isValid, setIsValid] = useState(true); // State theo dõi tính hợp lệ của đầu vào
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [errorMessage, setErrorMessage] = useState(""); // State lưu thông báo lỗi
  const [errorMessageEmail, setErrorMessageEmail] = useState("")


  const [validSubmit, setValidSubmit] = useState(false);

  // useEffect để thực hiện xác thực mỗi khi giá trị đầu vào thay đổi
  useEffect(() => {
    const valueC = validateCountry(valueCountry);
    const isValidEmail = validateEmail(valueEmail)
    setIsValid(valueC); // Cập nhật tính hợp lệ
    setIsValidEmail(isValidEmail)
    if (!valueC) {
      setErrorMessage("Chọn 1 giá trị"); // Cập nhật thông báo lỗi nếu không hợp lệ
    } else {
      setErrorMessage(""); // Xóa thông báo lỗi nếu hợp lệ
    }

    if (!isValidEmail) {
        setErrorMessageEmail("Name must be at least 3 characters long"); // Cập nhật thông báo lỗi nếu không hợp lệ
      } else {
        setErrorMessageEmail(""); // Xóa thông báo lỗi nếu hợp lệ
      }

      if (isValidEmail && isValid) { 
        setValidSubmit(true)
       } else { 
        setValidSubmit(false);
      }
  }, [valueEmail,valueCountry, isOption]); // useEffect sẽ chạy lại mỗi khi value thay đổi

  return (
    <Form className="rounded-5" style={{backgroundColor:"white" , width:"%" ,boxShadow:"10px 10px 10px #5c5b5b"}}>
        <div className="text-center t-1 rounded-top-5" style={{backgroundColor:"black"}}>
        <Form.Label className="text-white " >Customer Information</Form.Label>
        </div>
      <Form.Group controlId="validatedInput" className="m-5">

            <Form.Label className="text-dark">Name</Form.Label>
            <Form.Control
            type="text"
            
            value={valueEmail}
            onChange={(e) => setValueEmail(e.target.value)} // Cập nhật giá trị khi người dùng thay đổi
            isValid={isValidEmail} // Hiển thị trạng thái hợp lệ
            isInvalid={!isValidEmail} // Hiển thị trạng thái không hợp lệ
            />
            <Form.Control.Feedback type="invalid">
            {errorMessageEmail} {/* Hiển thị thông báo lỗi nếu không hợp lệ */}
            </Form.Control.Feedback>

      </Form.Group>
      

      <Form.Group  controlId="validatedInput" className="m-5">
        <Form.Label></Form.Label>
        <Row className="d-flex justify-content-start align-items-center">
        
        <Form.Check
            type="radio"
            label="Male"
            name="gender"
            value="male"
            checked={selectedOption === 'male'}
            onChange={e => setSelectedOption(e.target.value)}
            inline // This makes the radio buttons display inline with no extra spacing
          />
          <Form.Check
            type="radio"
            label="Female"
            name="gender"
            value="female"
            checked={selectedOption === 'female'}
            onChange={e => setSelectedOption(e.target.value)}

            inline // This makes the radio buttons display inline with no extra spacing
          />
          <Form.Check
            type="radio"
            label="Other"
            name="gender"
            value="other"
            checked={selectedOption === 'other'}
            onChange={e => setSelectedOption(e.target.value)}

            inline // This makes the radio buttons display inline with no extra spacing
          />
        </Row>
        {!isOption && <div className="text-danger">Please select at least one option.</div>}
      </Form.Group>

      <Form.Group  controlId="validatedInput" className="m-5">
        <Form.Select
            aria-label="Select input"
            value={valueCountry}
            onChange={(e)=> SetValueCountry(e.target.value)}
            isValid={isValid} // Hiển thị trạng thái hợp lệ
            isInvalid={!isValid} // Hiển thị trạng thái không hợp lệ
        >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
      </Form.Group>

        <Button
                    variant="primary"
                    type="submit"
                    className="d-block mx-auto m-5"
                    disabled={!isValid}
                    >
                    Login!
        </Button>
        
    </Form>
  );
}

export default UpdateInfo;
