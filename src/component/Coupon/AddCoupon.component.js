import { useState } from "react"
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddCoupon.css';
import axios from 'axios';

function AddCoupon(props) {

    const [formValues, setFormValues] = useState(
    {
        name:"",
        value:15,
        Date:"26-12-2021",
        Date:"22-12-2022",
    minimumCartValue:11,
    maxDiscount:"",
    maxPerUser:4,
    totalUse:5,
    termsAndCondition:"You can use this",
    imageId:7 
    }
    )

    function addCoupon(event) {
        event.preventDefault(); // prevents refreshing
        const postCoupon={
            formValues
        }
        axios.post('/api/staff/coupon', postCoupon ).then((response)=>{
            console.log(response);
        })
        alert("Submitted!" + " title: " + formValues.name + " value: " + formValues.maxDiscount );
        setFormValues({
            name:"",
            value:15,
            Date:"26-12-2021",
            Date:"22-12-2022",
        minimumCartValue:11,
        maxDiscount:"",
        maxPerUser:4,
        totalUse:5,
        termsAndCondition:"You can use this",
        imageId:7
        })
    }

    function handleInputChange(event) {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleFileChange(event) {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className="couponform">
        <div className="coupon">

        
        <div style={{width: "400px", margin: "auto" }}>
            <Form onSubmit={addCoupon}>
                <h3 className='coupontitle'>Add Coupon</h3>

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Coupon Name</Form.Label>
                    <Form.Control type="text" placeholder="Coupon Name..." name="name" onChange={handleInputChange} value={formValues.name} />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Add Coupon Image</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange} name="imgURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="value">
                    <Form.Label>Coupon Vaule</Form.Label>
                    <Form.Control type="text" placeholder="Value..." name="maxDiscount" onChange={handleInputChange} value={formValues.maxDiscount} />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ float: 'right' }} >
                    Add Coupon
                </Button>
            </Form>

            <img src={formValues.imgURL} alt="" />
        </div>
        </div>
        </div>
    )
}

export default AddCoupon