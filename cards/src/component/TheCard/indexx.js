import "./theCard.css";

const TheCard = (props) => {
    const { data } = props;
    const { name, email, phone } = data;
    return (
        <div className="card m-2 p-2">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
}

export default TheCard;
