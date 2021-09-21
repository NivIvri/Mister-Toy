import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { Loading } from './Loading'
import { ReviewPreview } from './ReviewPreview.jsx'

export class ReviewList extends Component {
  state = {
    toy: ''
  }
  componentDidMount() {
    const toy = this.props.toy
    this.setState({ toy }, console.log('toy', this.state.toy))
  }

  render() {
    const { toy } = this.state
    if (!toy) return <Loading />
    return (
      <section className="review">
        {toy.givenReviews.map((review) => {
          console.log(review);
          return <ReviewPreview key={review._id} onRemoveReview={this.props.onRemoveReview} user={this.props.user} review={review} />;
        })}
      </section>
    );
  }
}


