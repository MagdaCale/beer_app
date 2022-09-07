import DetailBtn from "./DetailBtn"

const BeerContainer =(props)=>{

    let producer = props.producer

    producer = producer.slice(0,producer.search('<'))

    return(
        <section className="beer-container-section">
            <div className="beer-container-div">
                <img src={props.image} alt="" />
            </div>
            <article className="beer-container-article">
                <h1>{props.name}</h1>
                <h2>{props.slogan}</h2>
                <p>Created by: {producer}</p>
                <DetailBtn id={props.id}/>

            </article>
                
        </section>
    )
}

export default BeerContainer