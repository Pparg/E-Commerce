import React from "react";
import { useContext } from "react";
import { Context } from "../Context/context";
import { CartItem } from "./CartItem";
import './NavBar.scss'

export function NavBar() {
    const {data , setData} = useContext(Context);
    return(<nav className="navbar_container">
        <div className="navbar_info">
            <img src="./frontend_challenge/images/logo.svg" alt="Brand Logo: Sneakers"></img>
            <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="user_navbar">
            <div className="cart"><i className="fa-solid fa-cart-shopping fa-xl"></i>
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

