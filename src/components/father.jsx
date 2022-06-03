import React from "react";

import Son from "./son";

export default props => {

    const notifyExit = local => alert(`Liberado para ${local}`);

    return(

        <div>
            <Son notifyExit={notifyExit}/>
        </div>

    )

}