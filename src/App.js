import React,{useState, useEffect} from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import Stafflogin from './component/Stafflogin/Stafflogin';
import AddStaffDetail from './component/AddStaffDetail/AddStaffDetail';
import Navbar from './component/Header/Navbar';
import Footer from './component/Footer/Footer';
import FinalAddCoupon from './component/Coupon/FinalAddCoupon.component';
import FinalAddMenuItem from './component/MenuItem/FinalAddMenuItem.component';
import FinalAddPincode from './component/Pincode/FinalAddPincode.component';
import ShowRestraurantInfo from './component/Restraurant/RestraurantInfo';
import Home from './component/Home/Home';

import axios from "axios";

axios.defaults.baseURL='https://food-app-timesinternet.herokuapp.com/'

if (typeof window !== 'undefined' && localStorage.getItem('token')) {
   axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
   
}


const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(getToken())
  }, [])

  function getToken() {
    if(typeof window !== 'undefined') {
      return localStorage.getItem("token")
    } else {
      return undefined
    }
  }

  const [fval,setfval]=useState({
    email:"",
    password:""
 });

  function signIn(email, password) {
    
      setfval({
        email: email,
        password: password
   })
      const url="https://food-app-timesinternet.herokuapp.com/api/staff/login"
        axios.post(url,fval)
        .then((res)=>{
             console.log(res.data);
             localStorage.setItem('token',res.data.token);
             setToken(res.data.token);
             
        })
        .catch(console.error());
      
   
  }

  // function signOut() {
  //   if (confirm("Are you sure you want to sign out?")) {
  //     if(typeof window !== undefined) {
  //       localStorage.removeItem('token')
  //     }
  //     setToken()
  //   }
  // }

  if (!token) {
    return <Stafflogin signIn={signIn} />
  }

  
  return (
    
    <>
    
        {/* <Route exact path="/stafflogin" component={Stafflogin} /> */}
        
        <Switch>
        <Navbar />
        <Route exact path="/pincode" component={FinalAddPincode} />
        <Route exact path="/coupon" component={FinalAddCoupon} />
        <Route exact path="/menu" component={FinalAddMenuItem} />
        <Route exact path="/addstaff" component={AddStaffDetail} />
        <Route exact path="/restraurantdetails" component={ShowRestraurantInfo} />
        <Route exact path="/" component={Home} />
        <Footer /> 
        </Switch>
        
        
    </>

    
  )
}

export default App;
