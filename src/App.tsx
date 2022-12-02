import React from 'react';
import './App.css';
import Accordions from "./components/Accordion/Accordions";
import {Rating} from "./components/Rating/Rating";


const App = () => {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"User"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Accordions titleValue={"Menu One"} collapsed={true}/>
            <Accordions titleValue={"Menu Two"} collapsed={false}/>
            <Accordions titleValue={"Menu One"} collapsed={false}/>
            <Accordions titleValue={"Menu Two"} collapsed={true}/>

        </div>

    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
