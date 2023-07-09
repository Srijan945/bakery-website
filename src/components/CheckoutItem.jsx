import "./css/CheckoutItem.css";
function CheckoutItem({name,count,price,setCartData}) {

    function handleDelete() {
        setCartData(prevData => {
            return prevData.filter(function(ele){
                if(ele.name === name){
                    return false;
                }
                else{
                    return true;
                }
            })
        });
        // let storedValue = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
        // storedValue = storedValue.map(function(ele){

        // });
    }
    return <main className='checkoutItem'>
        <p className="checkoutItem__name">{name}</p>
        <p className="checkoutItem__price">{price}</p>
        <p className="checkoutItem__count">{count}</p>
        <p className="delete" onClick={handleDelete}>delete</p>
    </main>
}

export default CheckoutItem;