import React from "react";
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { HiringForm } from "./HiringForm";
import { LocationList } from "./LocationList";
import { ProductList } from "./ProductList";

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
        <LocationList />
            </Route>

            <Route path="/products">
        <ProductList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/hire">
                <HiringForm />
            </Route>

            <Route path="/customers">
                <CustomerList />
            </Route>
    
        </>

    )
}