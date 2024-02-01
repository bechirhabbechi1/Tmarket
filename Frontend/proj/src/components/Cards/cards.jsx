/* eslint-disable no-unused-vars */
import "./cards.css"
import cardInfo from "./CardInfo"


// eslint-disable-next-line react/prop-types
const Ccard = ({ title, image, price, id }) => {
    return (
    <div className="Card">
        <img src={image} alt="product image" className="imgg" />
        <h2 className="Ctitle">{title}</h2>
        <p className="Ctype">Description goes here</p>
        <div className="tagg">
            <p className="Cprice">For {price}$</p>
            <button className="Cbutton">Add to card</button>
        </div>
        </div>
    )
    
}

const Cardcon = () =>(
    <div id="card_container">
        {cardInfo.map((cardInfo, index) => (
            <Ccard key={index} {...cardInfo} />
        ))}
    </div>
)
export default Cardcon

