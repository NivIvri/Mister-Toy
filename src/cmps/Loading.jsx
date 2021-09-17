import React from 'react';
import ReactLoading from 'react-loading';

export function Loading() {
    return (
        <div className='loading'>
            <ReactLoading className='loading' type='bubbles'  delay='15msecs' color='blue' height='20%' width='20%'  margin='0 auto' />
        </div>
    )
}
 