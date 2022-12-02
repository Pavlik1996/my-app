import React from "react";

type AccordionsPropsType = {
    titleValue: string
    collapsed: boolean
}

const Accordions = (props: AccordionsPropsType) => {
    if (props.collapsed) {
        return (
            <>
                <AccordionsTitle title={props.titleValue}/>
                <AccordionsBody titleMenu={props.titleValue}/>
            </>
        )
    }
    return (
        <>
            <AccordionsTitle title={props.titleValue}/>
        </>
    )

}

type AccordionsTitlePropsType = {
    title: string
}

const AccordionsTitle = (props: AccordionsTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <>
            <h3>{props.title}</h3>
        </>
    )
}

type AccordionsBodyPropsType = {
    titleMenu: string
}

const AccordionsBody = (props: AccordionsBodyPropsType) => {
    if (props.titleMenu === "Menu One") {
        return (
            <>
                <ul>
                    <li>ONE</li>
                    <li>I</li>
                    <li>1</li>
                    <li>Адзiн</li>
                </ul>
            </>
        )
    }
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