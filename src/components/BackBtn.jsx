import { Link, useNavigate } from "react-router-dom"

const BackBtn =()=>{
    const navigate = useNavigate();
    return(
        <Link to='/all_beers'><button onClick={() => navigate(-1)}></button><img src="../img/Back.png" alt="back arrow" /></Link>
    )
}

export default BackBtn