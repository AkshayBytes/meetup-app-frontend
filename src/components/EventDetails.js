import useFetch from "../useFetch"
import { useParams } from "react-router-dom"
import meetupLogo from "./meetup-1.svg";
import { Link } from "react-router-dom"






//console.log(eventId)
function EventDetails(){
    const eventId = useParams()
    console.log(eventId)

    const { data, loading, error } = useFetch("https://meetup-app-backend-five.vercel.app/")

    console.log(data)
   const eventData = data?.find((x) => x._id ===  eventId.eventId)
   console.log(eventData)
    return data ? (
        
        <main>
            <div className="container"> 
            <br/>
            <Link to="/">
                    <img src={meetupLogo} alt="Meetup Logo" width="100" />
                </Link>
                    <br/>
                    <br/>
                    
            
            <hr/>
            <div className="row">
            <div className="col">
            <h1>{eventData.eventName}</h1>
            <p>Hosted By: <strong>{eventData.hostedBy}</strong></p>
            
            <img src={`${eventData.eventImgUrl}`}/>

            <h2>Details: </h2>
            <p>{eventData.details}</p>
            <p><strong>Additional Information: </strong></p>
            <p><strong>Dress Code: </strong>{eventData.dressCode}</p>
            <p><strong>Age Restriction: </strong></p>
            <h3>Event Tags: </h3>
            <p>{eventData.eventTags[0]}  {eventData.eventTags[1]}</p>
            </div>
            <div className="col">
            <p>{eventData.eventDate} at {eventData.eventTime} to</p>
            <p>{eventData.eventEnding}</p>
            
            <br/>
            <p>{eventData.address}</p>
            <br/>
            <p>{eventData.price}</p>
            <h2>Speakers: (2)</h2>
            <img src={`${eventData.speakerOneimgUrl}`}/>
            <p><strong>{eventData.speakerOnename}</strong></p>
            <p>{eventData.speakerOnepost}</p>
            <img src={`${eventData.speakerTwoimgUrl}`}/>
            <p><strong>{eventData.speakerTwoname}</strong></p>
            <p>{eventData.speakerTwopost}</p>
            <p>RSVP</p>
            </div>
            </div>
            </div>
        </main>
    ) :( loading && <p>Loading...</p> );
}

export default EventDetails