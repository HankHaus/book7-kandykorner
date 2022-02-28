import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"













export const ProductList = () => {
    const history = useHistory()

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

    const purchaseCandy = (e) => {
        e.preventDefault()
        const newCandy = {
           productId: parseInt(e.target.value),
           customerId: parseInt(localStorage.getItem("kandy_customer"))
        }
    
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCandy)
        }
    
        return fetch("http://localhost:8088/purchases", fetchOption)
            .then(() => {
                history.push("/products")
            })
    }

//&ensp; adds a space in html

    return (
        <>


            {products.map(
                (productObject) => {
                    return <p key={`product--${productObject.id}`}>{productObject.candyName} {productObject.price}
                    <br></br>
                    {productObject.candyCategory?.categoryName}
                    &ensp;
                    <button onClick={purchaseCandy} value={productObject.id}>purchase</button>
                    </p>
                    //why is the optional chain operator a bad idea?
                    //A:
                }
            )
            }
        </>
    )
}

