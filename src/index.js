import React from "react";
import ReactDOM from "react-dom";

import First from "./components/firstComponent";
import Multiple from "./components/multipleComponents";

const root = document.getElementById("root");

ReactDOM.render(

    <div>
        <First text="Oi" operation={5*3}/>

        <h1>Vários componentes</h1>
        <Multiple.First/>
        <Multiple.Second/>
    </div>

, root)