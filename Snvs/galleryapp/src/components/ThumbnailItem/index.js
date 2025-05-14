import './index.css';

const ThumbnailItem = props =>{
        
    const { imageList, updateActiveThumbnailId,isActive} = props;
    const {id,thumbnailUrl,thumbnailAltText} =  imageList;
    const onClickThumbnailItem = () => {
        updateActiveThumbnailId(id);
        
    };
    const isActiveClass = isActive ? 'active' : '';
    return(
        <div className="thumbnail-container">
        <li className="thumbnail-item">
                <button type="button" className={`button ${isActiveClass}`}  onClick={onClickThumbnailItem}>
                <img src={thumbnailUrl} alt={thumbnailAltText} className="thumbnail-image"/>
            </button>
        </li>
        </div>
    );
}

export default ThumbnailItem;