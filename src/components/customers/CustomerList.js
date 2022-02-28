import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export const CustomerList = () => {
    const [customers, changeCustomer] = useState([])
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((data) => {
                    changeCustomer(data)
                })
        },
        []
    )

    return (
        <>
            {
                customers.map(
                    (customer) => {
                        return <div key={`customer--${customer.id}`}>{customer.name}
                        <hr/>
                     </div>
                     
                    }
                )
            }
        </>
    )
}