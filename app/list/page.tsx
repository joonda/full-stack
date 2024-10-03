// import Image from "next/image";
// import tomato from 'public/food0.png';
// import pasta from 'public/food1.png';
// import coconut from 'public/food2.png';


export default function List() {
    let products = ['Tomatoes', 'Pasta', 'Coconut'];
    return (
        <div>
            <h4 className="title">List</h4>
            {
                products.map((product, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img" />
                            <h4>{i + 1}. {product} $40</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
