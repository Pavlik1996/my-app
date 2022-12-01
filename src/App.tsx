import React from 'react';
import './App.css';
import Accordions from "./components/Accordion/Accordions";
import {Rating} from "./components/Rating/Rating";


const App = () => {
    console.log("app rendering")
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <Rating value={1}/>
            <Accordions/>
            <Rating value={4}/>
            <Rating value={3}/>
            <Rating value={2}/>
            <Rating value={0}/>
            <PageTitle title={"User"}/>
        </div>

    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}


export default App;
