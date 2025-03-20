import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const CardItem = (props) => {
    const { onDeleteItem, Details={} } = props; // Ensure Details is always an object
    const { name, genre, imageUrl, duration, id } = Details;

    const onDelete = () => {
        onDeleteItem(id);
    };

    return (
        <li className="song-item">
            <img src={imageUrl} alt={name} />
            <div className="song-info">
                <h3>{name}</h3>
                <p>{genre}</p>
            </div>
            <span className="duration">{duration}</span>
            <button type="button" className="delete-button" onClick={onDelete}>
                <i className="fas fa-trash-alt"></i>
            </button>
        </li>
    );
};

export default CardItem;
