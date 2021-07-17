import EventsTable from "./EventsTable";
import useFirestore from "../useFirestore"

export default function Dashboard() {
  const events = useFirestore("events")
  const loadingAnimation = (
    <center>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </center>
  );

  return events.data !== null ? <EventsTable events={events}/> : loadingAnimation;
}
