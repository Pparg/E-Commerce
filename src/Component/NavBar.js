import React from "react";
import { useContext, useState } from "react";
import { Context } from "../Context/context";
import { CartItem } from "./CartItem";
import './NavBar.scss'
import useMediaQuery from "../MediaQuery/useMediaQuery";

export function NavBar() {
    const {data , setData} = useContext(Context);
    let Mobile = useMediaQuery(700)
    let [clicked, setClicked] = useState(false)

    return(<nav className="navbar_container">
        <div className="navbar_info">
            <img src="./frontend_challenge/images/logo.svg" alt="Brand Logo: Sneakers"></img>
            {(Mobile || window.innerWidth<700)?<div className="samll_navbar" >
            <i aria-label="navigation bar, click to open" className="fa-solid fa-bars fa-xl" onClick={() => setClicked(true)}></i>
            {clicked && <div className="mobile_navbar">
            <div className="div"><i aria-label="xmark click to close" className="fa-solid fa-xmark fa-2xl" onClick={()=> setClicked(false)}></i></div>
            <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </div>}
            </div>
            :<ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>}
        </div>
        <div className="user_navbar">
            <div className="cart"><i className="fa-solid fa-cart-shopping fa-xl" aria-label="your cart, click to expand"></i>
                <div className="cart-item-container">
                <h1>Cart</h1>
                    {data.cart.length !== 0 ? data.cart.map((item, index)=> <CartItem item={item} id={index} key={index} />): <p>Your cart is empty</p>}
                    {data.cart.length !==0 && <button className="checkout">Checkout</button>}
                </div>
            </div>
            <img src="./frontend_challenge/images/image-avatar.png" alt="User Name"></img>
        </div>
    </nav>)
}

