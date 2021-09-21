import React from 'react';
import star from '../assets/img/star.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import close from '../assets/img/cancel.png'

class _ReviewPreview extends React.Component {

  canRemove = (review) => {
    if (!this.props.user) return
    return (review.user._id === this.props.user._id || this.props.user?.isAdmin)
  }
  render() {
    const { review, onRemoveReview } = this.props
    return (
      <div className="card-review" >
        <div className="review-info">
          {this.canRemove(review) &&
          <img className='close' src={close} onClick={() => onRemoveReview(review._id)} />}
          <Link to={`/user/${review.user._id}`}>
            <span className="review-username"> {review.user.fullname ? review.user.fullname.charAt(0).toUpperCase() : 'AB'}</span>
          </Link>
          <span className="review-name"> {review.toy.name}</span>

          <small className="review-date"> {new Date(review.createdAt).toLocaleString('he-IL')}</small>
        </div>
        <div>
          {review.rate >= 1 && <img src={star} alt='star' />}
          {review.rate >= 2 && <img src={star} alt='star' />}
          {review.rate >= 3 && <img src={star} alt='star' />}
          {review.rate >= 4 && <img src={star} alt='star' />}
          {review.rate >= 5 && <img src={star} alt='star' />}
        </div>
        <div>{review.txt}</div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    user: state.userModule.user,
    filterBy: state.toyModule.filterBy,
    toys: state.toyModule.toys,
  }
}

const mapDispatchToProps = {

}

export const ReviewPreview = connect(mapStateToProps, mapDispatchToProps)(_ReviewPreview)

