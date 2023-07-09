import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './css/Cart.css';
import CheckoutItem from "./CheckoutItem";
import { Link } from "react-router-dom";
function Cart() {
    
    const location = useLocation();
    const [cartData,setCartData] = useState([]);
    const [total,setTotal] = useState(0);
    let flag = false;
    useEffect(() => {
        
        let storedValue = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
        const store = () => {
            if(location.state){
                storedValue = storedValue.map(function(cartItem) {
                    if(cartItem.name === location.state.name){
                        flag=true;
                        return {
                            ...cartItem,
                            count: location.state.count 
                        }
                    } else {
                        return cartItem;
                    }
                });
            }
            if(!flag && location.state)  
            setCartData([...storedValue,location.state]);
            else
            setCartData([...storedValue]);
        }
        store();
        return () => {
            if(!flag && location.state)
            return sessionStorage.setItem('cartItems', JSON.stringify([...storedValue,location.state]));
            else
            return sessionStorage.setItem('cartItems', JSON.stringify([...storedValue]));
        }
    },[location]);

    useEffect(() => {
        let sum = 0;
        cartData.map(function(cartItem){
            sum += cartItem.price * cartItem.count;
        })
        setTotal(sum.toFixed(2));
    },[cartData]);
    return <div className="cart">
        <h1>Cart - Check your Order</h1>
        {   
            cartData.map(function(cartItem,idx){
                return <CheckoutItem setCartData={setCartData} key={idx} name={cartItem.name} price={cartItem.price} count={cartItem.count}/>
            })
        }
        <div className="total">Total - {total}</div>
        <Link className="payments" to='/payments'>
            <button>Go To Payments</button>
        </Link>
    </div>;
}

export default Cart;