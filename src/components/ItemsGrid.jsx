import Item from "./Item";
import bakeryItems from "./assets/data";
import './css/ItemGrid.css';

function ItemGrid() {

    return <main className="itemGrid">
    {bakeryItems.map(function(bakeryItem,idx){
        return <Item url={bakeryItem.url} description={bakeryItem.itemName} price={bakeryItem.itemPrice} key={idx} />
    })}
    </main>;
}

export default ItemGrid;