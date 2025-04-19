import useFetch from "../useFetch"
import meetupLogo from "./meetup-1.svg";
import { useState } from "react";


import { Link } from "react-router-dom"

const Events = () => {
    const [theEventType, setTheEventType] = useState("All")
    // console.log(theEventType)


    const { data, loading, error } = useFetch("https://meetup-app-backend-five.vercel.app/")
    const theSelectedEventType = theEventType == "All" ? data : data?.filter((x) => x.eventType == theEventType) 

    // console.log(data)

    const [eventSearchInput , setEventSearchInput] = useState();
    const inputHandler = (event) => {
          const value = event.target.value;
        //   let firstLetterUppercaseElseAllLower = ["s", "o","m","e","t","h","i","n","g"]
        
            
          
          



        setEventSearchInput(value);
    } 

    const finalFilteredEvents = theSelectedEventType?.filter((x) => x.eventName.toLowerCase().includes((eventSearchInput || "").toLowerCase()));
    
    const toRanderProductsData = finalFilteredEvents?.map((x) => {
        return (
           
            
            <div className="col-md-4 p-3" key={x._id}>
                
                <Link to={`/events/${x._id}`} >
                    
                        <div className="card mb-3">
                    <img className="img-fluid"   src={x.eventImgUrl} alt="image"/>
                    <div class="card-img-overlay">
                        <button className="btn btn-light" ><p class="card-title">{x.eventType}</p></button>

                    </div>
                    
                    
                    </div>
                    </Link>
                <div >
                    <div className="card-body">
                <p>{x.eventTime}  {x.eventDate}</p>
                    <strong>{x.eventName}</strong>
                </div>
                </div>
                
                
                

                
                
            </div>
            
        )
    })


    return(
        <>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col">
       <Link to="/">
        <img src={meetupLogo} alt="Meetup Logo" width="100" />
        </Link>
        </div>
        <div className="col">
          <input type="text" id="eventSearchInputId" onChange={inputHandler} className="form-control" placeholder="Search by title" />
        </div>
        </div>
        <br/>
        <br/>
        <hr/>
        <br/>
        <div className="row">
            <div className="col">
        <h1>Meetup Events</h1> 
        </div>
        <div className="col d-flex justify-content-end">
            <select onChange={(e) => setTheEventType(e.target.value) } id="typeSelect" class="form-select" placeholder="Search by title" >
                <option selected>Select Event Type</option>
                <option value="All">All</option>
                <option value="offline">Offline</option>
                <option value="online">Online</option>
            </select>
        </div>
        </div>
        <br/>

        <div className="row">
            {/* {console.log(eventSearchInput)}
            {console.log(finalFilteredEvents)} */}
        {toRanderProductsData}
        </div>
        </div>
        </>
    )
}

export default Events


