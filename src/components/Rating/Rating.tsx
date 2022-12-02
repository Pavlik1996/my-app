import React from "react";

type RatingPropsType = {
    value: number
}

export const Rating = (props: RatingPropsType) => {

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

type StartPropsType = {
    d : boolean
}

function Star(props: StartPropsType) {
    if (props.d) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }


}