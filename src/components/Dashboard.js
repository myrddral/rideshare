import EventsTable from "./EventsTable";
import useFirestore from "../useFirestore"
import { Spin } from 'antd';

export default function Dashboard() {
  const events = useFirestore("events")
  const loadingAnimation = (
    <div className="spinner">
      <Spin size="large" />
    </div>
  );

  return events.data !== null ? <EventsTable events={events}/> : loadingAnimation;
}
