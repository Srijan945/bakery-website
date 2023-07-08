import { useState } from "react";

function Item({url,description,price}) {
    
    const [cartClick, setCartClick] = useState(false);
    const [count,setCount] = useState(0);

    function handleCartClick() {
        setCartClick(true);
    }
    function handleIncrement() {
        setCount(prevState => prevState+1);
    }
    function handleDecrement() {
        //If user click minus button after reaching zero then cart click will be resetted to false
        setCount(prevState => {
            if(prevState > 0){
                return prevState-1;
            }
            else{
                setCount(0);
                setCartClick(false);
            }
        });
    }
    return <div className="item">
        <div className="item__img">
            <img src={url} alt='item-view' />
        </div>
        <p className="item__description">{description}</p>
        <p className="item__price">{price}</p>
        {!cartClick && <p className="item__addToCart" onClick={handleCartClick}>Add To Cart</p>}
        {cartClick && <div className="item__cartCounter">
            <p className="counterIcon" onClick={handleDecrement}>-</p>
            <p className="count">{count}</p>
            <p className="counterIcon" onClick={handleIncrement}>+</p>
        </div>}    
    </div>
}

export default Item;