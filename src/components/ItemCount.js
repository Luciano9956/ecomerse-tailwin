import React, { useState } from "react";

function ItemCount({ stock, initial = 1, onAdd }) {

    const [cuenta, setCuenta] = useState(initial)

    const sumar = () => {
        cuenta < stock && setCuenta(cuenta + 1)
        cuenta >= stock && alert('no hay mas stock')
    }

    const restar = () => {
        cuenta > 1 && setCuenta(cuenta -1)
    }


    return (
        <>
            <div className="flex gap-6 py-6 px-10">
                <button className="text-x1" onClick={restar}>-</button>
                <p className="text-x1 font-bold">{cuenta}</p>
                <button className="text-x1" onClick={sumar}>+</button>
            </div>
            <button className="bg-indigo-600 p-3 text-white" onClick={onAdd}>comprar</button>
        </>
    );
}

export default ItemCount;