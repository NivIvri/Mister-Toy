import React, { Component } from 'react'
import { userService } from '../services/user.service'
import star from '../assets/img/star.png'
import { Loading } from '../cmps/Loading.jsx'
import { MainLayout } from '../cmps/layout/MainLayout'
import undo  from '../assets/img/undo.png'
export class UserDetails extends Component {
  state = {
    user: null
  }
  async componentDidMount() {
    const user = await userService.getById(this.props.match.params.id)
    console.log(user);
    this.setState({ user })
  }

  onBack = () => {
    this.props.history.push(`/home`)
  }
  render() {
    const { user } = this.state
    if (!user) return <Loading />
    return (
      <MainLayout>

        <section className="user-details">
          <img  className='undo' src={undo} onClick={this.onBack} />
          <h1>{user.fullname} details</h1>
          <div className='reviews-container'>
            {
              user.givenReviews.map(review => {
                return (
                  <div className="card-review" key={review._id} >
                    <span className="review-name">Written about the  <h2 style={{ display: 'inline' }}>{review.toy.name}</h2> </span>

                    <div className="review-info">
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
                )
              })

            }
          </div>
        </section>
      </MainLayout>

    )
  }
}


