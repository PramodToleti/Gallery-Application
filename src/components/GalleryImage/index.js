import './index.css'

const GalleryImage = props => {
  const {imageDetails} = props
  const {imageUrl, imageAltText} = imageDetails
  return <img src={imageUrl} alt={imageAltText} className="image" />
}

export default GalleryImage
