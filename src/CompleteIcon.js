import {TodoIcon} from "./Todoicon";
import React from "react";

function CompleteIcon( {  completed, onComplete } ) {
    return (

        <TodoIcon
        type="check"
        color={completed ? "green" : "gray" }
        onClick={onComplete}
        />
    )
}

export { CompleteIcon}; 