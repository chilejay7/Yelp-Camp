export default function GoogleMap({ location }) {

    console.log('The map location used is:', location);

    return (
        <div className="google-map">
            <iframe
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=KeyHere&q=${location}`}>
            </iframe>
        </div>
    )
}