import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addQt, AddTotal, removeCart, subCount, subQt, SubTotal } from "../../redux/Action/actions";
// import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Cart.css"

export const Addtocart = ()=>{

    const cart = useSelector((state)=> state.shop.cart)
    const dispatch = useDispatch();
    const amount = useSelector((state)=> state.total.total)

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    useEffect(() => {
        let items = 0;
        let price = 0;
        var count = 0;
        cart.forEach((item) => {
            count++;
            price = count + item.price;
        });
        items += count;
        price = items * price;
        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    const remove =(e)=>{
        dispatch(removeCart(e.title))
        dispatch(subCount(1))
        let q = e.qty-1
        dispatch(SubTotal(e.price*q))
    }
    const sub =(e)=>{
        dispatch(SubTotal(e.price))
    }

    const addqty = (e)=>{
        console.log(e);
        
        dispatch(addQt(e.title));
        dispatch(AddTotal(e.price))
    }
    const subqty = (e)=>{
        if(e.qty === 0){
            dispatch(subCount(1))
            dispatch(removeCart(e.title))
        }
        else{
            dispatch(SubTotal(e.price)) 
            dispatch(subQt(e.title));
        }
    }


    return(
        <>
        <Navbar />
            <div id="addtocart">
                <div id="addtocart__left">
                {
                    cart.map((e)=>{
                        return(
                            <div>
                                <div><img src={e.image} alt="" /></div>
                                <div id="qty">
                                    <div><button onClick={()=>{subqty(e)}}>-</button></div>
                                    <div><h4>{e.qty}</h4></div>
                                    <div><button onClick={()=>{addqty(e)}}>+</button></div>
                                </div>
                                <div id="title"><p>{e.title}</p></div>
                                <div><h1>₹{e.price*e.qty}</h1></div>
                                <div><button id="closebut" onClick={() => 
                                    remove(e)
                                    } onClickCapture={()=>{
                                        sub(e)
                                    }}>X</button></div>
                            </div>
                        )
                    })
                }
                </div>

                <div id="addtocart__right">

                        <h3>PRICE DETAILS</h3>
                        <p>Total Items: (<span>{totalItems}</span>)</p>
                        <p>Discount: <span>₹0</span></p>
                        <h4>total price: <span>₹{amount.toFixed(2)}</span></h4>
                        <Link to="/success"><button id="addtocart__right__but">Checkout</button></Link>

                </div>
            </div>
        {/* <Footer /> */}
        </>
    )
}