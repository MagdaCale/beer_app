import { Link } from "react-router-dom"
import styled from "styled-components"

const Button = styled.button`
    width: 111px;
    height: 31px;
    background: #FFCA41;
    border: none;
    border-radius: 40px;
    font-size: 20px;
    color: #ffff;
    font-weight: 500;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`

const DetailBtn =(props)=>{
    return(
        <div className="detail-btn">
            <Link key={props.id} to={`/all_beers/${props.id}`}><Button>Details</Button></Link>

        </div>
    )
}

export default DetailBtn