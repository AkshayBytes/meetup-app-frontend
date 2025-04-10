import useFetch from "../useFetch"

const Events = () => {
    

    const { data, loading, error } = useFetch("https://meetup-app-backend-five.vercel.app/")

    console.log(data)
    const toRanderProductsData = data?.map((x) => {
        return (
            <div key={x._id}>
                
                <div class="col-md-4">
                    
                        <div className="card mb-3">
                    <img className="img-fluid"   src={x.eventImgUrl} alt="image"/>
                    <div class="card-img-overlay">
                        <button class="btn btn-light" ><p class="card-title">{x.eventType}</p></button>

                    </div>
                    
                    
                    </div>
                
                <div >
                    <div className="card-body">
                <p>{x.eventTime}  {x.eventDate}</p>
                    <strong>{x.eventName}</strong>
                </div>
                </div>
                </div>
                
                

                

            </div>
        )
    })


    return(
        <>
        <p>Hi Akshay</p>
        <div className="row">
        {toRanderProductsData}
        </div>
        </>
    )
}

export default Events


