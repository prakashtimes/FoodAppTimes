import React from "react";
import  "./MenuItemsCards.css";
import { arr } from "c:/users/jyoti.das/downloads/food-app-main-main/foodie/src/components/carousel/carouseimgdata";
const MenuItemCards = () => {
    const arr =[
        {
            name: "Paneer Butter Masala",
            price: "100"
        },
        {
            name: "1Paneer Butter Masala",
            price: "100"
        },
        {
            name: "2Paneer Butter Masala",
            price: "1200"
        },
        {
            name: "123Paneer Butter Masala",
            price: "12300"
        },
        {
            name: "34Paneer Butter Masala",
            price: "4100"
        },
        {
            name: "79Paneer Butter Masala",
            price: "5100"
        },
        
    ]
    const rendercards=(info, index)=>{
        return(
            <>
             <li className="cards_item" key={index}>
                        <div className="card">
                            <div className="card_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
                            <div className="card_content">
                                <h2 className="card_title">{info.name}</h2>
                                <p className="card_text">Category: Indian</p>
                                <button className="btn1 card_btn">₹ {info.price}/-</button>
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