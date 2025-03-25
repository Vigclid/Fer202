import axios from "axios";
import React, { useReducer , useState , useEffect} from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import { redirect, useNavigate } from "react-router-dom";

export const LoginForm = () => {

    const navigate = useNavigate();

    const formReducer = (state, action) => {
        switch (action.type) {
          case "SET_FIELD":
            return { ...state, [action.field]: action.value };
          case "SUBMIT":
            return { ...state, isSubmitted: true };
          default:
            return state;
        }
      };

    const initialState = { name: "", password: "", isSubmitted: false };
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [errors, setErrors] = useState({});
    const [succes, setSucces] = useState(false);    
    const [banned, setBanned] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const handleValidation = () => {
        const newErrors = {};
        if (!state.name) newErrors.name = "Username is required";
        if (!state.password) newErrors.password = "Password is required";
        setErrors(newErrors);
        setShowAlert(Object.keys(newErrors).length > 0);
        setTimeout(() => {
          setShowAlert(false);
      },1000)
        return Object.keys(newErrors).length === 0;
      };

      
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "SET_FIELD", field: name, value });
      };
    
    const [userAccount, setUserAccount] = useState([]);    

    useEffect(() => {
        const _dataAccount = async() => {
            const _data = await axios.get(`http://localhost:5000/UserAccounts`).then(res => res.data);
            setUserAccount(_data);
        }
        

        _dataAccount();
    },[])



    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (handleValidation()) {
          dispatch({ type: "SUBMIT" });
          let _u = null;
          _u = userAccount.find(user => {
            if (user.username === state.name && user.password === state.password) {
              return user;
            }
          })
    
          if (_u === null || _u === undefined) {
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 1000)
          } else {
            if (_u.status === "inactive") {
              setBanned(true);
              setTimeout(() => {
                setBanned(false);
              }, 1000)
            } else {
              setSucces(true);
              setTimeout(() => {
                navigate("/home");
              }, 1000)
            }
          }
        }
      };


    return (
        <Container className="w-25 my-5 border rounded" >
        <h3 className="d-flex justify-content-center">Login</h3>
       
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Username"
              value={state.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={state.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" className="my-2 w-100">Login</Button>
          </div>
        </Form>
        {showAlert && (
          <Alert variant="danger" >
            <strong>Error :</strong> Invalid username or password!
          </Alert>
        )}
        {succes && (
            <Alert variant="success">
                <strong>Success :</strong> Welcome, {state.name} login Successful!!
            </Alert>
        )}
        {banned && (
            <Alert variant="danger">
                <strong>Warning :</strong> You account has been banned
            </Alert>
        )}
      </Container>
    )
}