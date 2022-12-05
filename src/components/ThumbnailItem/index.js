import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem, displayMainImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailItem

  const displayImage = () => {
    displayMainImage(id)
  }

  return (
    <li className="thumbnail-container">
      <button className="image-button" onClick={displayImage} type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
