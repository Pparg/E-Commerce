import React, { useState, useContext} from "react";
import { Context } from "../Context/context";
import './Product.scss'
import useMediaQuery from "../MediaQuery/useMediaQuery";

export function Product() {
    let {data, setData} = useContext(Context)
    let [clicked, setClicked] = useState(false)
    let [Quantity, setQuantity] = useState(1)
    let [id, setId]= useState(1)
    let Mobile = useMediaQuery(500)
    let handleBigImg = (e)=>{
        e.preventDefault()
        setId(Number(e.target.id))
    }
    let addToCart = ()=> {
        if(Quantity>0){
            let newItem = {
                path : data.path_cart,
                title : data.title,
                price : data.discount_price,
                quantity : Quantity
            }
            setData({
                ...data,
                cart : [...data.cart, newItem]
            })
            setQuantity(1)
        }
        
    }
    let handlePlus = ()=>{
        if(id===4){
            setId(1)
        }
        else{
            setId(id+1)
        }
    }
    let handleMinus= ()=>{
        if(id===1){
            setId(4)
        }
        else{
            setId(id-1)
        }
    }
    return(<section className="product_section">
    {(clicked && !Mobile)&& <div className="product_image_fullscreen">
        <div className="close">
            <button onClick={()=>setClicked(!clicked)}><i className="fa-solid fa-xmark fa-xl"></i></button>
        </div>
        <div className="big_img_container">
            <button onClick={()=>handleMinus()}><i className="fa-solid fa-chevron-left fa-xl"></i></button>
            <img className="product_image_fullscreen_big" src={`./frontend_challenge/images/image-product-${id}.jpg`} alt='big img'></img>
            <button onClick={()=>handlePlus()}><i className="fa-solid fa-chevron-right fa-xl"></i></button>
        </div>
        <div className="product_image_small">
            {data.path_image.map((url,index)=> <img id={index+1} key={index} src={`./frontend_challenge/images/${url}`} alt="imag" onClick={(e)=>handleBigImg(e)}></img>)}
        </div>
    </div>}
    <div className="product_image">
        {(Mobile || window.innerWidth<500) && <button onClick={()=>handleMinus()} className="mobile_buttons"><i className="fa-solid fa-chevron-left fa-xl"></i></button>}
        <img className="product_image_big" src={`./frontend_challenge/images/image-product-${id}.jpg`} alt='big img' onClick={()=> setClicked(true)}></img>
        {(Mobile || window.innerWidth<500) && <button onClick={()=>handlePlus()} className="mobile_buttons"><i className="fa-solid fa-chevron-right fa-xl"></i></button>}
        {!Mobile && <div className="product_image_small">
            {data.path_image.map((url,index)=> <img id={index+1} key={index} src={`./frontend_challenge/images/${url}`} alt="imag" onClick={(e)=>handleBigImg(e)}></img>)}
        </div>}
    </div>
    <div className="product_info"> 
        <p>SNEAKER COMPANY</p>
        <h1>{data.title}</h1>
        <p>{data.info}</p>
        <div className="product-item">
            <h2>$ {data.discount_price}</h2>
            <p>{data.discount}</p>
            <p>$ {data.original_price}</p>
        </div>
       
        <div className="product-to-cart">
            <div className="quantity">
                <button onClick={()=> {if(Quantity>1) return setQuantity(Quantity-1)}}><i className="fa-solid fa-minus fa-xl"></i></button>
                <p>{Quantity}</p>
                <button onClick={()=> setQuantity(Quantity+1)}><i className="fa-solid fa-plus fa-xl"></i></button>
            </div>
            <button onClick={()=> addToCart()} className="to-cart"><i className="fa-solid fa-cart-shopping"></i> Add to cart</button>
        </div>

    </div>

    </section>)
    
}