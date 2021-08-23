import React,{useEffect, useState} from "react";
import  "./MenuItemsCards.css";
import axios from "axios"
import { arr } from "c:/users/jyoti.das/downloads/food-app-main-main/foodie/src/components/carousel/carouseimgdata";
import { isFor } from "@babel/types";
const MenuItemCards = () => {
    const[id, setid] =useState();
    const [arr, setarr] = useState([]);
    axios.get('/api/staff/item').then(res => {
        setarr(res.data)
        // console.log(res.data);
    })
    .catch(console.error())
    // useEffect(
        
    // , []);
    

    
    const rendercards=(info, index)=>{
        return(
            <>
             <li className="cards_item" key={index}>
                        <div className="card">
                            <div className="card_image"><img src={info?.image?.mainUrl} /></div>
                            <div className="card_content">
                                <h2 className="card_title">{info?.name}</h2>
                                <p className="card_text">{info?.itemType}</p>
                                <button className="btn1 card_btn">₹ {info?.sellingPrice}/-</button>
                            </div>
                        </div>
                    </li>
            </>
        )
    }
    return (
        <>
            <div className="main123">
                <h1>Menu Items</h1>
                <ul className="cards123">
                   {arr.map(rendercards)}
                    
                </ul>
            </div>
        </>
    )
}
export default MenuItemCards