import React, { Component } from 'react'
import { reviewService } from '../services/review.service'
import star from '../assets/img/star.png'
import { MainLayout } from '../cmps/layout/MainLayout'
import { Loading } from '../cmps/Loading'
import { Link } from 'react-router-dom';
import undo  from '../assets/img/undo.png'

export default class Reviews extends Component {
    state = {
        reviews: null
    }

    async componentDidMount() {
        const reviews = await reviewService.query()
        console.log(reviews);
        this.setState({ reviews })
        console.log(reviews);
    }

    onBack = () => {
        this.props.history.push(`/home`)
      }
    render() {
        const { reviews } = this.state
        if (!reviews) return <Loading />
        return (
            <MainLayout>
                <section className="user-details">
                <img className='undo' src={undo} onClick={this.onBack} />

                    <h1> Reviews</h1>
                    <div className='reviews-container'>
                        {
                            reviews.map(review => {
                                return (
                                    <div className="card-review" key={review._id} >
                                        <Link to={`/user/${review.user._id}`}>
                                            <span className="review-username"> {review.user.fullname ? review.user.fullname : 'AB'}</span>
                                        </Link>
                                        <span className="review-name"> <h2 style={{ display: 'inline' }}>{review.toy.name}</h2> </span>
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
                                        <div> Written  by <h2 style={{ display: 'inline' }}>{review.user.fullname}</h2></div>

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
