import "./card.css";
import events from "../globals";

function Card() {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id} className={`card-${event.id}`}>
          <div className="text-wrapper">
            <h3 className="header">{event.title}</h3>
            <h3>{event.time}</h3>
            <h3>{event.price}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
