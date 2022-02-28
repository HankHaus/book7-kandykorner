import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    return (
        <>
            <button onClick={() => history.push("/employees/hire")}>Hire Employee</button>
            {
                employees.map(
                    (employee) => {
                        return <div key={`employee--${employee.id}`}>{employee.name} <br/> {employee.location?.streetAddress}
                        <hr/>
                     </div>
                     
                    }
                )
            }
        </>
    )
}