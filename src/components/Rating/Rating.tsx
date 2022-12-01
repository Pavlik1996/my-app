import React from "react";

export const Rating = (props: any) => {

    if (props.value === 1) {
        return (
            <div>
                <Star d={true}/>
                <Star d={false}/>
                <Star d={false}/>
                <Star d={false}/>
            </div>
        )
    }
    if (props.value === 2) {
        return (
            <div>
                <Star d={true}/>
                <Star d={true}/>
                <Star d={false}/>
                <Star d={false}/>
            </div>
        )
    }
    if (props.value === 3) {
        return (
            <div>
                <Star d={true}/>
                <Star d={true}/>
                <Star d={true}/>
                <Star d={false}/>
            </div>
        )
    }
    if (props.value === 4) {
        return (
            <div>
                <Star d={true}/>
                <Star d={true}/>
                <Star d={true}/>
                <Star d={true}/>
            </div>
        )
    }

    return (
        <div>
            <Star d={false}/>
            <Star d={false}/>
            <Star d={false}/>
            <Star d={false}/>
        </div>
    )


}

function Star(props: any) {
    console.log("Star rendering")
    if (props.d === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star</span>
    }


}