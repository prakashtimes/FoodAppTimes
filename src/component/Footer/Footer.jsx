import React from "react"
import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="footer-left col-md-4 col-sm-6">
                    <p class="about">
                        <span> About Food-App</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                        ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                    </p>
                    <div class="icons">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-google-plus"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-center col-md-4 col-sm-6">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span> 142, Film City</span> Noida, India</p>
                    </div>
                    <div>
                        <i class="fa fa-phone"></i>
                        <p> (+00) 0000 000 000</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="#"> food-app@times.com</a></p>
                    </div>
                </div>
                <div class="footer-right col-md-4 col-sm-6">
                    <h2> Food-App<span> logo</span></h2>
                    <p class="menu">
                        <a href="#"> Home</a> |
                        <a href="#"> Profile</a> |
                        <a href="#"> Orders</a> |
                        <a href="#"> Coupons</a> 
                        
                    </p>
                    <p class="name"> Food-App &copy; 2021</p>
                </div>
            </footer>
        </>
    )
}
export default Footer;