import React from 'react'
import { Link } from 'react-router-dom';
import toyImg1 from '../assets/img/toyImg1.jpg';
import toyImg2 from '../assets/img/toyImg2.jpg';
import toyImg3 from '../assets/img/toyImg3.png';
import toyImg4 from '../assets/img/toyImg4.jpg';
import soldOut from '../assets/img/out-of-stock.png';

export function ToyPreview({ onRemove, toy }) {
    const getSrc = (toyimgNum) => {
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
    return (
        <div className='card-container'>
            <button className='close-btn' onClick={(ev) => {
                onRemove(ev, toy._id)
            }}>x</button>
            <Link to={`/toy/${toy._id}`} className='text-link'>
                <div className='toy-card'>
                    <img src={getSrc(toy.imgNum)} alt='toy img' />
                    <h3> {toy.name}</h3>
                    <div> {toy.labels.map(lable => <span>|{lable}</span>)}</div>
                    <div> {toy.price}$</div>
                    <div>Add at: {new Date(toy.createdAt).toLocaleString('he-IL')}</div>
                    <div className={toy.inStock ? 'green' : 'red'}> {toy.inStock ? 'Stock availability!' : 'Not availability'}</div>
                    { !toy.inStock && 
                    <img className='out-of-stock' src={soldOut}/>
                    }
                </div>
            </Link>
        </div>
    )
}
