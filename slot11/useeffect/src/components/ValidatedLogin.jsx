
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

// Hàm xác thực đầu vào (ví dụ: kiểm tra độ dài tối thiểu)
const validateEmail = (value) => {
    var re = /\S+@\S+\.\S+/;
  return re.test(value);
  };
  

const validatePass = (value) => {
    return value.length >= 8;
}
function ValidatedLogin() {
  const [valueEmail, setValueEmail] = useState(""); // State lưu trữ giá trị đầu vào
  const [valuePass, SetValuePass] = useState(""); // State lưu trữ giá trị đầu vào

  const [isValid, setIsValid] = useState(true); // State theo dõi tính hợp lệ của đầu vào
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [errorMessage, setErrorMessage] = useState(""); // State lưu thông báo lỗi
  const [errorMessageEmail, setErrorMessageEmail] = useState("")


  const [validSubmit, setValidSubmit] = useState(false);
  // useEffect để thực hiện xác thực mỗi khi giá trị đầu vào thay đổi
  useEffect(() => {
    const isValidInput = validatePass(valuePass);
    const isValidEmail = validateEmail(valueEmail)
    setIsValid(isValidInput); // Cập nhật tính hợp lệ
    setIsValidEmail(isValidEmail)
    if (!isValidInput) {
      setErrorMessage("Giá trị phải có ít nhất 8 ký tự!"); // Cập nhật thông báo lỗi nếu không hợp lệ
    } else {
      setErrorMessage(""); // Xóa thông báo lỗi nếu hợp lệ
    }

    if (!isValidEmail) {
        setErrorMessageEmail("Email không hợp lệ!"); // Cập nhật thông báo lỗi nếu không hợp lệ
      } else {
        setErrorMessageEmail(""); // Xóa thông báo lỗi nếu hợp lệ
      }

      if (isValidEmail && isValid) { 
        setValidSubmit(true)
       } else {
         setValidSubmit(false);
      }
  }, [valueEmail,valuePass]); // useEffect sẽ chạy lại mỗi khi value thay đổi

  return (
    <Form className="rounded-5" style={{backgroundColor:"white" , width:"30%" ,boxShadow:"10px 10px 10px #5c5b5b"}}>
        <div className="text-center t-1 rounded-top-5" style={{backgroundColor:"black"}}>
        <Form.Label className="text-white " >Login Form</Form.Label>
        </div>
      <Form.Group controlId="validatedInput" className="m-5">

            <Form.Label className="text-dark">Email</Form.Label>
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
      
      <Form.Group controlId="validatedInput" className="m-5">
              <Form.Label className="text-dark">Password</Form.Label>
              <Form.Control
                type="password"
                value={valuePass}
                onChange={(e) => SetValuePass(e.target.value)} // Cập nhật giá trị khi người dùng thay đổi
                isValid={isValid} // Hiển thị trạng thái hợp lệ
                isInvalid={!isValid} // Hiển thị trạng thái không hợp lệ
              />
              <Form.Control.Feedback type="invalid">
                {errorMessage} {/* Hiển thị thông báo lỗi nếu không hợp lệ */}
              </Form.Control.Feedback>
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

export default ValidatedLogin;
