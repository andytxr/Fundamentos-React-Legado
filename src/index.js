import React from "react";
import ReactDOM from "react-dom";

import First from "./components/firstComponent";
import Multiple from "./components/multipleComponents";
import MultipleElements from "./components/multipleElements";
import Family from "./components/family";
import Family2 from './components/family2'
import Member from "./components/member";

const root = document.getElementById("root");

ReactDOM.render(

    <div>
        <First text="Oi" operation={5*3}/>

        <h1>Vários componentes</h1>
        <Multiple.First/>
        <Multiple.Second/>
        <h1>Múltiplos elementos</h1>
        <MultipleElements/>
        <h1>Família 1</h1>
        <Family/>
        <h1>Família 2</h1>
        <Family2 lastname="Teixeira">
            <Member name="Elza"></Member>
            <Member name="Admilson"></Member>
        </Family2>
    </div>

, root)