
import React from 'react'
import { connect } from 'react-redux'
import { ReviewList } from '../cmps/ReviewList'
import { addReview, removeReview, loadReviews } from '../store/review.actions.js'
import { onGetById } from '../store/toy.actions'
import { Link } from 'react-router-dom'
import { MainLayout } from '../cmps/layout/MainLayout.jsx';
import Button from '@material-ui/core/Button';
import no from '../assets/img/remove.png';
import check from '../assets/img/check.png';
import toyImg1 from '../assets/img/toyImg1.jpg';
import toyImg2 from '../assets/img/toyImg2.jpg';
import toyImg3 from '../assets/img/toyImg3.png';
import toyImg4 from '../assets/img/toyImg4.jpg';
import { Loading } from '../cmps/Loading.jsx'


class _ToyDetails extends React.Component {
    state = {
        toy: ''
    }

    componentDidMount() {
        this.loadToy()
    }

    loadToy = async () => {
        const { toyId } = this.props.match.params
        let newToy = await this.props.onGetById(toyId)
        this.setState({ toy: newToy })
    }

    getSrc = (toyimgNum) => {
        switch (toyimgNum) {
            case 1:
                return toyImg1
            case 2:
                return toyImg2
            case 3:
                return toyImg3
            case 4:
                return toyImg4
            default:
                return toyimgNum
        }
    }

    onRemoveReview = async (reviewId) => {
        await this.props.removeReview(reviewId)
        this.loadToy()
    }


    render() {
        const { toy } = this.state
        if (!toy) return <Loading />
        return (
            <MainLayout>
                <div className='details'>
                    <div className='toy-info'>
                        <div className='detail_right'>
                            <h1 className='name-details'> {toy.name}</h1>
                            <div className='price'>  {toy.price}$</div>
                            <div> {toy.labels.map(lable => <span>|{lable}</span>)}</div>
                            <div className="div-separator"></div>
                            <img className='img' src={this.getSrc(toy.imgNum)} alt='toy img' />
                            <div>Add at: {new Date(toy.createdAt).toLocaleString('he-IL')}</div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><img src={check} alt='delivery available' />
                                        </td>
                                        <td>Home delivery available on this toy</td>
                                    </tr>
                                    {toy.inStock && <tr>
                                        <td><img src={check} alt='avilable' />
                                        </td>
                                        <td>Toy available</td>
                                    </tr>}
                                    {!toy.inStock && <tr>
                                        <td><img src={no} alt='avilable' />
                                        </td>
                                        <td>Sorry this toy is not available</td>
                                    </tr>}
                                </tbody>
                            </table>
                            <div className="btn-conatiner">
                                <Link to={`/toy/edit/${toy._id}`}> <Button style={{
                                    width: '90px'
                                }} variant="outlined">Edit</Button>
                                </Link>

                                {this.props.user &&
                                    <Link to={`/toy/add/review/${toy._id}`}>
                                        <Button variant="outlined">Write a Review</Button>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>

                    <div className='review-conatiner'>
                        <ReviewList toy={this.state.toy} user={this.props.user} onRemoveReview={this.onRemoveReview} />
                    </div>
                </div>
            </MainLayout>
        )
    }
}


function mapStateToProps(state) {
    return {
        filterBy: state.toyModule.filterBy,
        user: state.userModule.user
    }
}

const mapDispatchToProps = {
    onGetById,
    addReview,
    removeReview,
    loadReviews
}

export const ToyDetails = connect(mapStateToProps, mapDispatchToProps)(_ToyDetails)

