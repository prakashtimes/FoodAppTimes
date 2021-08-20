import { useState, useEffect } from "react"
import { Form, Button, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddMenuItem.css';
import axios from "axios";

function AddMenuItem(props) {
    const [catval, setcatval] = useState([]);
    const [idval, setidval] = useState();
    const [formValues, setFormValues] = useState({
        title: '',
        category: '',
        price: '',
        imgURL: '',

    })

    function addItem(event) {
        event.preventDefault();
        alert("Submitted!" + " title: " + formValues.title + " category: " + formValues.category + " price: " + formValues.price + formValues.imgURL);
        const postdata = {
            name: formValues.title,
            actualPrice: Number(formValues.price),
            sellingPrice: Number(formValues.price),
            itemType: "VEG",
            categoryId: idval,
            imageId: 3
        }
        axios.post("api/staff/item", postdata).then((res) => {
            console.log(res);
        })
            .catch(console.error());

        
    }

    function handleInputChange(event) {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }
    useEffect(() => {
        axios.get("api/staff/category").then((res) => {
            setcatval(res.data)
            console.log(res.data)
        })
            .catch(console.error());
    }, [])
    

    function handleDropdownChange(event) {
        setidval(event)
        setFormValues((prev) => {
            return {
                ...prev,
                category: event
            }

        })
        
    }
    function handleFileChange(event) {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.files[0].name
            }
        })
    }

    return (
        <div className="menuitemform">
            <div className="menuitem">
                <div style={{ width: "400px", margin: "auto" }}>
                    <Form onSubmit={addItem}>
                        <h3 className="menuitemtitle">Add Menu Item</h3>

                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control type="text" placeholder="Item Name..." name="title" onChange={handleInputChange} value={formValues.title} />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Add Item Image</Form.Label>
                            <Form.Control type="file" onChange={handleFileChange} name="imgURL" />
                        </Form.Group>


                        <Dropdown onSelect={handleDropdownChange} style={{ marginBottom: "16px" }} >
                            <Dropdown.Toggle variant="success" id="category" >
                                Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu ">
                                {
                                catval.map((val, index) => {
                                    return <Dropdown.Item eventKey={val.id}>{val.name}</Dropdown.Item>
                                })
                                }
                            </Dropdown.Menu>
                        </Dropdown>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Item Price</Form.Label>
                            <Form.Control type="text" placeholder="Price..." name="price" onChange={handleInputChange} value={formValues.price} />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ float: 'right' }} >
                            Add Item
                        </Button>
                    </Form>

                    <img src={formValues.imgURL} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AddMenuItem