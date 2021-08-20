import React, { useState, useEffect } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import MenuItemCards from "../MenuItemCards/MenuItemCards";
import { Card } from "react-bootstrap";
import "./Home.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Redirect, Link } from "react-router-dom";
import e from "express";
const Home = () => {
    const [apidata, setapidata] = useState([]);

    const [config, setconfig] = useState(null);
    // useEffect((e) => {
    //     e.preventDefaults();
    //     setconfig({
    //         headers: {
    //             Authorization: localStorage.getItem('token')
    //         }
    //     })

    // }, [config])
    // if (config !== null) {
        useEffect(() => {
            axios.get('https://food-app-timesinternet.herokuapp.com/api/staff/restaurant').then(res => {
                console.log(res);
                setapidata(res.data.restaurantDetail);
            }).catch(console.error())
        }, [])
    

    //To Item
    const [redirectmenu, setredirectmenu] = useState(0);
    const tomenu = () => {
         
        setredirectmenu(1);
    }
    if (redirectmenu) {
        return (<Redirect to='/menu' />)
    }
    // To Location
    const [redirectpincode, setredirectpincode] = useState(0);
    const topincode = (e) => {
         e.preventDefault();
        setredirectpincode(1);
    }
    if (redirectpincode) {
        return <Redirect to="/pincode" />
    }
    //To Coupon
    const [redirectcoupon, setredirectcoupon] = useState(0);
    const tocoupon = (e) => {
         e.preventDefault();
        setredirectcoupon(1);
    }
    if (redirectcoupon) {
        return <Redirect to="/coupon" />
    }


    return (
        <>
            
            <div className="d-flex align-items-center">
                <div className="container">
                    <div className="row workingdiv outline mx-auto">
                        <div className="row">
                            <div className="col-4 order-2 order-lg-1 header-img">
                                <img src="https://source.unsplash.com/1000x1000/?nature,water" alt="sorry" className="m-3 img-fluid" />
                            </div>

                            <div className="col-8 pt-5 pt-lg-0 order-1 order-lg-2 ">
                                <h1 className="text-lg-center text-success">{apidata?.name}</h1>
                                <div >
                                    <div className="addressdetail">
                                        <LocationOnIcon />
                                        {apidata?.address?.line1} ,
                                        {apidata?.address?.line2} <br />
                                        {apidata?.address?.city} {apidata?.address?.state} {apidata?.address?.pincode}
                                    </div>
                                    <div className=" h4 p-5 ">
                                        Open at: {apidata?.openingTime}<br />
                                        Closes at: {apidata?.closingTime}<br />
                                        Status: <strong>{apidata?.status}</strong>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="buttons d-flex align-items-center">

                        <button type="button" className="btn-lg btn-outline-dark" onClick={()=> window.location.href='/menu'}>Add Item</button>
                        <button type="button" className="btn-lg btn-outline-dark" onClick={()=> window.location.href='/pincode'}>Add Location</button>
                        <button type="button" className="btn-lg btn-outline-dark" onClick={()=> window.location.href='/coupon'}>Add Coupon</button>
                        <button type="button" className="btn-lg btn-outline-dark" onClick={()=> window.location.href='/addstaff'}>Add Staff</button>
                    </div>

                    <div>

                    </div>
                    </div>
                    </div>

                <MenuItemCards />
                 
        </>
     )
}
export default Home;