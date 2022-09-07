import BackBtn from "../components/BackBtn"
import NavBar from "../components/NavBar"

import { useState,useEffect } from "react"
import { useParams } from "react-router-dom" 

const BeerDetail =(props)=> {
    const [beer, setBeer] = useState({})
    const params = useParams()


    useEffect(() =>{
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
        .then(res => res.json())
        .then(beers => setBeer(beers))
    },[])
    
    // Änderungen: class: random-beer-article + random-beer-div angegeben. // class: beer-description

    return(
        <section className="random-beer-section">
            <img src={beer.image_url} alt="" />
            <article className="random-beer-article">
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <div className="random-beer-info">
                    <div className="random-beer-div">
                        <p>First brewed:</p>
                        <p>{beer.first_brewed}</p>
                    </div>
                    <div className="random-beer-div">
                        <p>Attenuation level:</p>
                        <p> {beer.attenuation_level}</p>

                    </div>
                </div>
                <p className="beer-description">{beer.description}</p>

            </article>

            <div className="container-back-btn">
                {params.beerId != 'random'? <BackBtn id={props.id}/>:null} 

            </div>

            <NavBar/>

        </section>
    )
}

export default BeerDetail