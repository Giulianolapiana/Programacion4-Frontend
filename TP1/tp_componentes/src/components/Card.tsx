function Card() {
    return (
        <div className="card" 
            style={{
                width: "350px",           
                }}>
            <div className="card-body">
                <CardBody />
                </div>
        </div>
    );
}

export function CardBody() {
    return (
        <>
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">This is a card component.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </>
    );
}

export default Card;