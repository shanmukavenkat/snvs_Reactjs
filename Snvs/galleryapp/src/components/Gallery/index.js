import {Component} from 'react'
import './index.css'
import ThumbnailItem from '../ThumbnailItem'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here

class Gallery extends Component {
  state = {activeThumbnailId: imagesList[0].id}
  updateActiveThumbnailId = id => {
    this.setState({activeThumbnailId: id})
  }
  getfilteredImages = () => {
    const {activeThumbnailId} = this.state    
    const filteredImages = imagesList.filter(
      eachImage => eachImage.id === activeThumbnailId,
    )
    return filteredImages

  }


  render() {
    const filteredImages = this.getfilteredImages();
    const {activeThumbnailId} = this.state;

    return (
      <div className="container">
        <ul  className="image">
            {filteredImages.map(eachImage => (
                <li key={eachImage.id}>
                <img
                    src={eachImage.imageUrl}
                    alt={eachImage.imageAltText}/>
                </li>
            ))}
        </ul>
        <div className='text'>
        <h1 className='heading'>Nature Photography</h1>
        <p className='heading'>Nature Photography by Rahul</p>
        </div>
       <ul>
        {imagesList.map(eachImage =>(
          <ThumbnailItem key={eachImage.id} imageList={eachImage} 
          updateActiveThumbnailId={this.updateActiveThumbnailId}
          isActive={activeThumbnailId === eachImage.id}
          />
            
        ))}
       </ul>
      </div>
    )
  }
}

export default Gallery
