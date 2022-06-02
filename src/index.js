import React from "react";
import ReactDOM from "react-dom";

import First from "./components/firstComponent";

const root = document.getElementById("root");

ReactDOM.render(

    <div>
        <First text="Oi" operation={5*3}/>
    </div>

, root)