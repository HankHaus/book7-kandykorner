import React, { useEffect, useState } from "react"

//defines LocationsList function
export const LocationList = () => {


    const [locations, setLocations] = useState([])
    //const [totalCustomerMessage, updateMessage] = useState("")
    //Q:is this defining two variables both with the value of useState?
    //A:no, youre deconstructing the output of useState, which is an array, the initial value of customers is
    //the argument of useState. 
    //setCustomers is a function used to change the value of customers

    //Q:because we pass in [] as the argument for useState, customers initial value is an empty array?
    //A: yes


    //Q:in the video, Steve said that useEffect is an event listener, what triggers it?
    //A: this accepts two arguments, the first of which is a function
    //the second argument is an array. whatever you pass in to this array, when it
    //changes, the function(firstargument) will execute. if the array is empty,
    //it will run once on page load
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





    return (
        <>


            {locations.map(
                (locationObject) => {
                    return <p key={`location--${locationObject.id}`}>{locationObject.streetAddress}</p>
                }
            )
            }
        </>
    )
}

