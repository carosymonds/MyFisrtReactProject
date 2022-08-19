import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({sincronize}){
    const {show, toggleShow} = useStorageListener(sincronize);
    if(show){
        return (
        <div className="ChangeAlert">
            <button onClick={()=> toggleShow(false)}>Reload to see changes</button>
        </div>);
    }else{
        return null;

    }
}
export {ChangeAlert};