import React from "react";
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
    return (
    <button>
        <FaShoppingCart className="text-white" size={30}/>
    </button>

    );
}

export default CartWidget;