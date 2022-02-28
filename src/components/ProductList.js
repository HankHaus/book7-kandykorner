import React, { useEffect, useState } from "react"


export const ProductList = () => {


    const [products, setProducts] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=candyCategory")
                .then(res => res.json())
                .then((productArray) => {
                    setProducts(productArray)
                })
        },
        []
    )



//&ensp; adds a space in html

    return (
        <>


            {products.map(
                (productObject) => {
                    return <p key={`product--${productObject.id}`}>{productObject.candyName} {productObject.price}
                    <br></br>
                    {productObject.candyCategory?.categoryName}
                    &ensp;
                    <button onClick={() => {}}>purchase</button>
                    </p>
                    //why is the optional chain operator a bad idea?
                    //A:
                }
            )
            }
        </>
    )
}

