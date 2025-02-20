import {useState,memo} from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {Col,Row} from 'react-bootstrap';
const SearchFilter = () => {
    const ProductList = [
        {
            name: "Babythree 1000% 🍀"
        }, 
        {
            name: "Gamming chair ECO system boost adrenaline 🎐"
        },
        {
            name: "144hz monitor, gamming trainner 🎮"
        },
        {
            name: "300 code excercises for childrend 🧑‍💻"
        },
        {
            name: "Babythree 500% 👶"
        },
        {
            name: "Vaccine covid-19 🥭"
        },
        {
            name: "Vaccine ebola 🦠"
        },
        {
            name : "Vaccine nubula 🌍"
        },
        {
            name : "Vaccine code racism ✨"
        }
    ]

    function getRandomColor() {
        const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
        return color;
      }

    const [inputSearch, setInputSearch] = useState();
    return (
        <>
        <Form.Label htmlFor="inputPassword5" style={{color:"cyan"}}>Searching product machine:</Form.Label>
        <Form.Control
            type="text  "
            id="inputPassword5"
            placeholder='Input product name'
            aria-describedby="passwordHelpBlock"
            onChange={e => setInputSearch(e.target.value)}
            className='w-50 p-3'
        />
        <div className="d-flex flex-wrap justify-content-center gap-3 my-5">
            {
                ProductList.filter(product  => product.name.includes(inputSearch)).map(
                    product => {
                        return(
                            <Card  bg="dark" text="light" style={{ width: '18rem'}} className="p-3">
                            <Card.Header>{product.name}</Card.Header>
                            <Card.Body style={{color:getRandomColor()}}>FER202</Card.Body>
                          </Card>
                        )
                    }
                )
            }
        </div>
        </>
    )
}

export default memo(SearchFilter)