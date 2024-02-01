/* eslint-disable no-unused-vars */
import Cardcon from "./Cards/cards"
import Navv from "./navbar"
import "./NewStuff.css"


export default function NewStuff() {
    return (
        <> 
            <Navv />
            <h1 className="front">-Check out whats hot !-</h1>
            <Cardcon />
        </>
    )
}

