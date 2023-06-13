import React from "react";
import { useContext } from "react";
import { Context } from "../Context/context";
import '../Component/NavBar.scss'

export function CartItem({item, id}) {
    let {data, setData} = useContext(Context)
    let deleteItem = (id)=>{
        let newArr = data.cart.filter((item,index)=> index!==id);
        setData({
            ...data,
            cart : newArr
        })
        

    }
    return(<>
        <div className="cart-item">
            <img src={`./frontend_challenge/images/${item.path}`} alt="product"></img>
                <div className="cart-item-info">
                    <p>{item.title}</p>
                    <div className="price">
                        <p>${item.price}</p>
                        <p>x{item.quantity}</p> 
                        <p className="total">${item.quantity*item.price}</p>
                    </div>
                </div>
                 <button aria-label='remove from cart' onClick={()=> deleteItem(id)}><i className="fa-solid fa-trash-can"></i></button>
        </div>
        
    </>
    )
}