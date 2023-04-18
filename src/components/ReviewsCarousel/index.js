// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onClickLeft = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onClickRight = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  getReview = presentReview => {
    const {imgUrl, username, companyName, description} = presentReview
    return (
      <div className="user-details">
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p className="black-text">{companyName}</p>
        <p className="black-text">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    const presentReview = reviewsList[activeReviewIndex]
    return (
      <div className="bg">
        <h1>Reviews</h1>
        <div className="card">
          <button
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickLeft}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="Left arrow"
            />
          </button>
          {this.getReview(presentReview)}
          <button
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickRight}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="Right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
