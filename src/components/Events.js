import useFetch from "../useFetch"
import { Link } from "react-router-dom"

const Events = () => {
    

    const { data, loading, error } = useFetch("https://meetup-app-backend-five.vercel.app/")

    console.log(data)
    const toRanderProductsData = data?.map((x) => {
        return (
        
            <div className="col-md-4" key={x._id}>
                
                <Link to="event`${x._id}`" >
                    
                        <div className="card mb-3">
                    <img className="img-fluid"   src={x.eventImgUrl} alt="image"/>
                    <div class="card-img-overlay">
                        <button className="btn btn-light" ><p class="card-title">{x.eventType}</p></button>

                    </div>
                    
                    
                    </div>
                
                <div >
                    <div className="card-body">
                <p>{x.eventTime}  {x.eventDate}</p>
                    <strong>{x.eventName}</strong>
                </div>
                </div>
                
                
                

                
                </Link>
            </div>
        )
    })


    return(
        <>
        <p>Hi Akshay</p>
        <div className="container">
        <div className="row">
        {toRanderProductsData}
        </div>
        </div>
        </>
    )
}

export default Events


