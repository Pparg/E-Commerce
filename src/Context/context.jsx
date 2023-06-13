import { createContext, useState } from "react";

// este para consumir
export const Context = createContext()
// este para proveer
export function ContextProvider({children}) {
    const [data, setData] = useState({

        path_cart : "image-product-1-thumbnail.jpg",
        path_image : ["image-product-1.jpg", "image-product-2.jpg","image-product-3.jpg","image-product-4.jpg" ],
        title: "Fall Limited Edition Sneakers",
        info : "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        discount : "50%",
        original_price : "250",
        discount_price : "125.00",
        cart : []
      })
    return(
        <Context.Provider value={{data, setData}}>
            {children}
        </Context.Provider>
    )
    
}