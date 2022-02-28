import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export const OrdersList = () => {
    const [orders, setOrders] = useState([])
    const history = useHistory()
    useEffect(
        () => {
            fetch(`http://localhost:8088/purchases?_expand=product&customerId=${localStorage.getItem("kandy_customer")}`)
                .then(res => res.json())
                .then((data) => {
                    setOrders(data)
                })
        },
        []
    )

    return (
        <>
            
            {
                orders.map(
                    (order) => {
                        return <div key={`order--${order.id}`}>{order?.product.candyName} <br/> {order?.product.price}
                        <hr/>
                     </div>
                     
                    }
                )
            }
        </>
    )
}