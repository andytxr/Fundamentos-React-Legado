import React from "react";

export default props => {

    return(

        <div>
            <button onClick={()=>props.notifyExit("Shopping")}>Vou sair</button>
        </div>

    )

}