// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={className}>
      <div>
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-para">{description}</p>
        <button className="card-btn">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
