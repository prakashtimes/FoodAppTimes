import { useState ,useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "./AddPincode.css"

function AddPincode() {

    const [formValues, setformValues] = useState({
        pincodeString: '',
        pincodes: []
    })


    function addPincodes(event) {
        event.preventDefault();
        const postpincode={
            formValues
        };
        axios.post('http://localhost:3000/PincodeList', postpincode ).then((response)=>{
            console.log(response);
        })
        alert('submitted'+formValues.pincodes)
        // for(let i=0; i<formValues.pincodes.length; i++){
        //     console.log(formValues.pincodes[i]);
        // }
    }

    function handleInputChange(event) {
        let pincodes = event.target.value.split(",").map(function(item) {
            return item.trim();
          });
          event.preventDefault();
        //   console.log(pincodes)
        setformValues({
            pincodeString: event.target.value,
            pincodes: pincodes
        })
    }
  
           
        
    return (
        
        <>
        <div className="pincodeform">
        <div className="pincode">

        <div style={{width: "400px", margin: "auto"}}>
            <Form onSubmit={addPincodes}>
                <h3 className="pincodetitle">Add Pincodes</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Pincodes</Form.Label>
                    <Form.Control type="text" placeholder="Enter comma separated pincode values" name="pincodes" onChange={handleInputChange} value={formValues.pincodeString} />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ float: 'right' }} >
                    Add
                </Button>
            </Form>
        </div>
        </div>
        </div>
        </>
    )

}

export default AddPincode;
