// import Image from "next/image";
// import tomato from 'public/food0.png';
// import pasta from 'public/food1.png';
// import coconut from 'public/food2.png';
'use client'

import { useState } from "react";

export default function List() {
    let products = ['Tomatoes', 'Pasta', 'Coconut'];
    let [quantity, quantityChange] = useState([0, 0, 0])

    return (
        <div>
            <h4 className="title">List</h4>
            {
                products.map((product, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img" />
                            <h4>{i + 1}. {product} $40</h4>
                            {/* If change quantity, span tag is re-rendering (update) */}
                            <span> {quantity[i]} </span>
                            <button onClick={() => {
                                {/* [...quantity] => independent array copy. */}
                                let copy = [...quantity]
                                copy[i]++
                                quantityChange(copy)
                            }}>+</button>

                            <button onClick={() => {
                                if (quantity[i] > 0) {
                                    let copy = [...quantity]
                                    copy[i]--
                                    quantityChange(copy)
                                }
                            }}>-</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
