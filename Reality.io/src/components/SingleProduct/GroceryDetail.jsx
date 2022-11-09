import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addCount, addToCart, CartGrocery, FetchSelectedGrocery, SetTotal } from "../../redux/Action/actions";
// import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Product.css"

export const GroceryDetail = ()=>{

    const grocery = useSelector((state)=> state.groceryitem)
    const {groceryId} = useParams();
    const dispatch = useDispatch();
    const {  image, title, price, description } = grocery;
   
    useEffect(()=>{
        if(groceryId && groceryId !== "") dispatch(FetchSelectedGrocery(groceryId))
    }, [groceryId])

    var count = 1;
    const add =(e)=>{
        if(count==1&&e.cart=='true'){
          dispatch(addToCart(e))
          dispatch(SetTotal(e.price))
          dispatch(addCount(1))
          dispatch(CartGrocery(e.id))
          count++;
        }else{
          alert("Product added cart..!")
        }
      }

    return(
        <>
        <Navbar />
            <div id="product">
                {Object.keys(grocery).length === 0
                ? (
                    <div>...Loading</div>
                ) : (
                    <div id="product-main">
                        <div>
                        <img src={image} alt={title} />
                        </div>

                        <div>
                        <h4>{title}</h4>
                            <div></div>
                            <h1>₹{price}</h1>
                            <p id="product-description">{description}</p>
                            <button onClick={() => add(grocery)}>Add to Cart</button>
                        </div>
                    </div>
                )}
            </div>
        {/* <Footer /> */}
        </>
    )
}
