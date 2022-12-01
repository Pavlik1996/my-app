import React from "react";

const Accordions = () => {
    return (
        <>
            <AccordionsTitle/>
            <AccordionsBody/>
        </>
    )
}
const AccordionsTitle = () => {
    console.log("AccordionTitle rendering")
    return (
        <>
            <h3>Menu</h3>
        </>
    )
}

const AccordionsBody = () => {
    console.log("AccordionBody rendering")
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </>
    )
}

export default Accordions;