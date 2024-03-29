import { useParams } from "react-router-dom";
import TechCardContent from "./TECH/TechCardContent.js";
import ElectricalCardContent from "./ELECTRICAL/ElectricalCardContent";
import MbaCardContent from "./MBA/MbaCardContent";
import ShCardContent from "./SH/ShCardContent";
import MechCardContent from "./MECH/MechCardContent";

const EventDetailsComponent = ({title,desc}) =>{
    return(
        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
};

const EventDetails = () => {
    const {techTitle,electricalTitle,mbaTitle,shTitle,mechTitle} = useParams();

    const findDept = () =>{
        switch(true){
            case !!techTitle:
                return TechCardContent.find((content)=>content.eventTitle===techTitle);
            case !!electricalTitle:
                return ElectricalCardContent.find((content)=>content.eventTitle===electricalTitle);
            case !!mbaTitle:
                return MbaCardContent.find((content)=>content.eventTitle===mbaTitle);
            case !!shTitle:
                return ShCardContent.find((content)=>content.eventTitle===shTitle);
            case !!mechTitle:
                return MechCardContent.find((content)=>content.eventTitle===mechTitle);
            default:
                return null;
        }
    };

    const EventContentDetails = findDept();
   
  return (
    <div>
        <div>
            <EventDetailsComponent title={EventContentDetails.eventTitle} desc={EventContentDetails.eventDesc} />
        </div>
    </div>
  )
}

export default EventDetails;