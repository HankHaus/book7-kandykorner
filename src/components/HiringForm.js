import { useHistory } from "react-router-dom"
import { LocationList } from "./LocationList"
import React, { useEffect, useState } from "react"



export const HiringForm = () => {
    const [locations, setLocations] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                //fetches the customers from api

                .then(res => res.json())
                //parses the response as js

                .then((locationArray) => {
                    //takes the parsed data, refers to it as customerArray

                    setLocations(locationArray)
                    //invokes setCustomers and passes in customerArray as the argument

                    //Q:the way I understand it, setCustomers(customerArray) sets the value of 
                    //customers as the customerArray, is this correct, and if so, how does it do that?
                    //A:yes and react magic
                })
        },
        []
    )


    const [employee, updateEmployee] = useState()
    const history = useHistory()


    const hireEmployee = (e) => {
        e.preventDefault()
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }


    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name..."
                        onChange={
                            (e) => {
                                const copy = { ...employee }
                                copy.name = e.target.value
                                updateEmployee(copy)
                            }
                        }
                    />
                </div>
            </fieldset>

            {<fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location: </label>
                    <select name="location"
                        onChange={(e) => {
                            const copy = { ...employee }
                            copy.locationId = parseInt(e.target.value)
                            updateEmployee(copy)
                        }}
                        defaultValue="0">
                        <option value="0" disabled hidden>Select Location...</option>
                        {
                            locations.map(
                                (location) => {
                                    return (
                                        <option key={`location--${location.id}`} value={`${location.id}`}>
                                            {`${location.streetAddress}`}
                                        </option>
                                    )
                                }
                            )
                        }
                    </select>
                </div>
            </fieldset>}

            {<fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager: </label>

                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Y/N..."
                        onChange={
                            (e) => {
                                const copy = { ...employee }
                                copy.manager = e.target.value
                                updateEmployee(copy)
                            }
                        }
                       />
                </div>
            </fieldset>}

            {<fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time: </label>

                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Y/N..."
                        onChange={
                            (e) => {
                                const copy = { ...employee }
                                copy.fullTime = e.target.value
                                updateEmployee(copy)
                            }
                        }
                         />
                </div>
            </fieldset>}
            {<fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate: </label>

                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Hourly Rate..."
                        onChange={
                            (e) => {
                                const copy = { ...employee }
                                copy.hourlyRate = e.target.value
                                updateEmployee(copy)
                            }
                        }
                        />
                </div>
            </fieldset>}
            { <button onClick={hireEmployee} className="btn btn-primary">
                Hire
            </button> }
        </form>
    )
}