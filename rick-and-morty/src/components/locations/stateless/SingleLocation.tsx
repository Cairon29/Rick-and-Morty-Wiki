interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
}

export const SingleLocation = ({ location }: { location: Location }) => {
  return (
    <li className="single-location">
        <h3 id="location-name">{location.name}</h3>
        <div className="location-details">
            <p><b>Type:</b> <span id="location-type">{location.type}</span></p>
            <p><b>Dimension</b> <span id="location-dimension">{location.dimension}</span></p>
        </div>
    </li>
  )
}
