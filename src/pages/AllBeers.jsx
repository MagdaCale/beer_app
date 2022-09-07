import { useEffect, useState } from "react"

import BeerContainer from "../components/BeerContainer"
import NavBar from "../components/NavBar"

const AllBeer =()=>{
    const [product, setProduct] = useState([])

    useEffect(()=>{
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then(res=> res.json())
        .then(beers => setProduct(beers))
    },[])

    console.log(product)
    return(
        <section>
            {product.map((item)=>{
                return(
                    <BeerContainer 
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        image={item.image_url}
                        slogan={item.tagline}
                        producer={item.contributed_by}
                        brewed={item.first_brewed}
                        level={item.attenuation_level}
                    />
                )
            })}
            <NavBar/>
        </section>
    )
}

export default AllBeer