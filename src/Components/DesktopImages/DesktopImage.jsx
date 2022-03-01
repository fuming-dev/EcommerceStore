import {SliderImage} from '../Carousel/SliderImage'
import './desktop.css'
function DesktopImage() {
  return (

    <div className="image-container">{SliderImage.map((image)=>{
        return (
          <div >
              <img src={image.image} alt="" />
              <div className="image-text">
                <h3>{image.title}</h3>
                <p>{image.p}</p>
         
              </div>
 
          </div>
        );
    })}</div>
  )
}

export default DesktopImage