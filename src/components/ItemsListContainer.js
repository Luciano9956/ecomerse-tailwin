import React from "react";
// import ItemCount from "./ItemCount";
import ItemsList from "./ItemList";


function ItemsListContainer() {

    // const onAdd = () => {
    //     alert(`gracias, por tu compra`)
    // }

    return (
        <>
            <div className=" container mx-auto px-4 w-80 ">
                {/* <ItemCount stock={5} onAdd={onAdd} /> */}
            </div>
            <ItemsList/>
        </>
    );
}

export default ItemsListContainer;